export interface IError {
    error: string;
    message: string;
    stack: string;
}

export function errorPresenter(err: Error): IError {
    return {
        error: err.name,
        message: err.message,
        stack: err.stack
    }
}
