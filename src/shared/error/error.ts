export class BaseError extends Error {
  defaultMessage: string;
  onConfirm?: () => void;

  constructor(
    defaultMessage: string,
    message?: string,
    onConfirm?: () => void,
  ) {
    super(message ?? defaultMessage);
    this.name = this.constructor.name;
    this.defaultMessage = defaultMessage;
    this.onConfirm = onConfirm;
  }
}

export class AuthorizationError extends BaseError {
  constructor(message?: string, onConfirm?: () => void) {
    super("인증이 필요합니다.", message, onConfirm);
  }
}

export class NotFoundError extends BaseError {
  resource?: string;

  constructor(message?: string, onConfirm?: () => void) {
    super("요청한 리소스를 찾을 수 없습니다.", message, onConfirm);
  }
}

export class ServerError extends BaseError {
  constructor(message?: string, onConfirm?: () => void) {
    super("서버 오류가 발생했습니다.", message, onConfirm);
  }
}
