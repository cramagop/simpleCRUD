export enum HttpCode {
    Ok = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    NotAllowed = 405,
    InternalServerError = 500,
}

export type HttpMessage = {
    httpCode: number,
    httpMessage: unknown
}

export function httpMessage (httpcode: HttpCode, customField?: unknown): HttpMessage {

    switch (+httpcode) {
        case HttpCode.Ok:
            return {
                httpCode: HttpCode.Ok,
                httpMessage: customField
            }
        case HttpCode.Created:
            return {
                httpCode: HttpCode.Created,
                httpMessage: {"NewId": customField}
            }
        case HttpCode.InternalServerError:
            return {
                httpCode: HttpCode.InternalServerError,
                httpMessage: customField
            }
        case HttpCode.BadRequest:
            return {
                httpCode: HttpCode.BadRequest,
                httpMessage: customField
            }
        case HttpCode.NotFound:
            return {
                httpCode: HttpCode.NotFound,
                httpMessage: {"NotFound": customField}
            }
        default:
            return {
                httpCode: HttpCode.InternalServerError,
                httpMessage: "Surprise ! It's a funky message"
            };

    }
}
