import { handleError } from "@/shared/error/handleError";
import { ensureAccessToken } from "@/features/chat/lib/ensureAccessToken";

// 모든 소켓 이벤트가 상속받을 기본 인터페이스
export interface SocketEvents {
  onOpen?: () => void;
  onError?: (event: Event) => void;
  onClose?: (code: number, reason?: string) => void;
}

// 각 소켓 클래스가 구현해야 하는 이벤트 핸들러
export abstract class Socket<Events extends SocketEvents> {
  protected socket: WebSocket | null = null;
  protected events: Events;

  constructor(events: Events) {
    this.events = events;
  }

  // 서브클래스에서 구현해야 하는 추상 메서드
  protected abstract getEndpointPath(): string;
  protected abstract handleMessage(event: MessageEvent): void;
  protected abstract getDebugName(): string;
  protected abstract getCloseCodeName(): string;

  public isOpen(): boolean {
    return this.socket !== null && this.socket.readyState === WebSocket.OPEN;
  }

  private async getWsUrl(): Promise<string> {
    const token = await ensureAccessToken();
    const path = this.getEndpointPath();
    const baseUrl = process.env.NEXT_PUBLIC_API_WS_URL || "ws://localhost:8000";

    // 쿼리 파라미터로 accessToken을 추가하는 공통 로직
    return `${baseUrl}${path}?token=${token}`;
  }

  public async connect(): Promise<void> {
    const debugName = this.getDebugName();
    if (this.socket) {
      console.warn(`[${debugName}] Already connected`);
      return;
    }
    try {
      const wsUrl = await this.getWsUrl();
      this.socket = new WebSocket(wsUrl);
    } catch (e) {
      console.error(`[${debugName}] Failed to create WebSocket URL.`);
      handleError(e);
    }
    return new Promise((resolve, reject) => {
      this.socket!.onopen = () => {
        console.log(`[${debugName}] Connected`);
        this.events.onOpen?.();
        resolve();
      };

      this.socket!.onmessage = (event) => this.handleMessage(event);

      this.socket!.onclose = (event) => this.handleClose(event);

      this.socket!.onerror = (err) => {
        console.error(`[${debugName}] Error:`, err);
        this.events.onError?.(err);
        reject(err);
      };
    });
  }

  // 토큰 만료 시 재연결 로직 (모든 소켓에 공통)
  protected async handleClose(event: CloseEvent) {
    const debugName = this.getDebugName();

    if (event.code === 4001) {
      console.warn(`[${debugName}] Token expired (4001). Attempting refresh.`);

      try {
        await ensureAccessToken();
        await this.reconnect(); // 갱신 성공 시 재연결
        return;
      } catch (err) {
        handleError(err);
        return;
      }
    }

    console.warn(`[${debugName}] Closed:`, event.code);
    this.events.onClose?.(event.code, event.reason);
    this.socket = null;
  }

  protected async reconnect() {
    console.log(`[${this.getDebugName()}] Reconnecting after refresh…`);
    this.socket = null;
    await this.connect();
  }

  public async close(): Promise<void> {
    if (!this.socket) return;

    const socket = this.socket;

    return new Promise((resolve) => {
      const prevOnClose = socket.onclose;

      socket.onclose = async (event) => {
        prevOnClose?.call(socket, event);
        this.socket = null;
        resolve();
      };

      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ event: this.getCloseCodeName() }));
        socket.close(1000, "Client disconnect");
      } else {
        this.socket = null;
        resolve();
      }
    });
  }
}
