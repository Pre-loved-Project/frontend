import { useAuthStore } from "@/features/auth/model/auth.store";
import { AuthorizationError } from "@/shared/error/error";
import { handleError } from "@/shared/error/handleError";

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

  private getWsUrl(): string {
    const { accessToken } = useAuthStore.getState();
    const path = this.getEndpointPath();
    const baseUrl = process.env.NEXT_PUBLIC_API_WS_URL || "ws://localhost:8000";

    // 쿼리 파라미터로 accessToken을 추가하는 공통 로직
    return `${baseUrl}${path}?token=${accessToken}`;
  }

  public connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      const debugName = this.getDebugName();

      if (this.socket) {
        console.warn(`[${debugName}] Already connected`);
        resolve();
        return;
      }

      try {
        this.socket = new WebSocket(this.getWsUrl());
      } catch (e) {
        console.error(`[${debugName}] Failed to create WebSocket URL.`);
        reject(e);
        return;
      }

      this.socket.onopen = () => {
        console.log(`[${debugName}] Connected`);
        this.events.onOpen?.();
        resolve();
      };

      this.socket.onmessage = (event) => this.handleMessage(event);

      this.socket.onclose = (event) => this.handleClose(event);

      this.socket.onerror = (err) => {
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
      const { logout, setAccessToken } = useAuthStore.getState();

      try {
        const refreshed = await fetch("/api/auth/refresh", {
          method: "POST",
          credentials: "include",
        });

        if (!refreshed.ok) {
          logout();
          throw new AuthorizationError(
            "세션이 만료되었습니다.\\n다시 로그인 해주세요.",
          );
        }

        const { accessToken: newToken } = await refreshed.json();
        setAccessToken(newToken);
        this.reconnect(); // 갱신 성공 시 재연결
      } catch (err) {
        handleError(err);
        logout();
        return;
      }
    }

    console.warn(`[${debugName}] Closed:`, event.code);
    this.events.onClose?.(event.code, event.reason);
    this.socket = null;
  }

  protected reconnect() {
    console.log(`[${this.getDebugName()}] Reconnecting after refresh…`);
    this.socket = null;
    this.connect();
  }

  public close() {
    if (!this.socket) return;

    // 서브클래스에서 정의한 종료 이벤트 이름 사용
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify({ event: this.getCloseCodeName() }));
      this.socket.close(1000, `User left ${this.getDebugName()}`);
    } else {
      this.socket.close(
        1000,
        `User left skipped - ${this.socket.readyState.toString()}`,
      );
    }

    this.socket = null;
  }
}
