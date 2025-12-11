export class BaseError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = new.target.name;
  }
}

export class AuthorizationError extends BaseError {
  constructor(message = "인증이 필요합니다.") {
    super(message, 401);
  }
}

export class NotFoundError extends BaseError {
  constructor(message = "요청한 리소스를 찾을 수 없습니다.") {
    super(message, 404);
  }
}

export class ServerError extends BaseError {
  constructor(message = "서버 오류가 발생했습니다.", status: number) {
    super(message, status);
  }
}
