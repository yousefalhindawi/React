export const bankingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'WITHDRAW':  {
           return state > 0 ? state - action.payload : state
    };
        case 'DIPOSIT': return state + action.payload;
        default: return state;
    }
} 