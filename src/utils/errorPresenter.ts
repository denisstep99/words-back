export function errorPresenter(err: Error) {
    return {
        error: err.name,
        message: err.message,
        stack: err.stack
    }
}
