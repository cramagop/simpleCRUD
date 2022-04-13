import { HttpCode } from '../../services/httpMessage'

export class HttpError extends Error {
    public readonly name: string;
    public readonly httpCode: HttpCode;
  
    constructor(name: string, httpCode: HttpCode, description: string) {
      super(description);
  
      Object.setPrototypeOf(this, new.target.prototype);
  
      this.name = name;
      this.httpCode = httpCode;

      Error.captureStackTrace(this);
    }
  }