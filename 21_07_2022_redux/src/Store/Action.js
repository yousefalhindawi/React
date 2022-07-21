export const withDraw = (amount) => {
    return {
        type: 'WITHDRAW',
        payload: amount
    }
}

export const diposit = (amount) => {
    return {
        type: 'DIPOSIT',
        payload: amount
    }
}