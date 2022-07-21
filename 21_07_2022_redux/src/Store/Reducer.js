export const bankingReducer = (state = 0, action) => {
    switch (action.type) {
        case 'WITHDRAW':  {
            if(state> 0) {
                return state - action.payload
            }
            else
            {
                return state
            }
    };
        case 'DIPOSIT': return state + action.payload;
        default: return state;
    }
} 