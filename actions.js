export const actionTypes = {
    FAILURE: 'FAILURE',
    LOAD_DATA: 'LOAD_DATA'
}

export function failure(errors) {
    return {
        type: actionTypes.FAILURE,
        errors
    }
}

export function sendData() {
    return { type: actionTypes.LOAD_DATA }
}
