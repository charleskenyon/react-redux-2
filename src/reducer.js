import * as actionType from './constants/ActionTypes';

export const initialState = {
    initialAmount: 10000,
    totalSent: 0,
    transactions: [],
    input: {
        name: { error: '', value: '' },
        email: { error: '', value: '' },
        amount: { error: '', value: '' }
    }
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionType.UPDATE_INPUT:
            return {
                ...state,
                input: {
                    ...state.input,
                    [action.inputType]: {
                        error: '',
                        value: action.value
                    }
                }
            }

        case actionType.SEND_FUNDS:
            return { 
                ...state,
                totalSent: state.totalSent + action.transaction.amount,
                transactions: [ ...state.transactions, action.transaction ],
                input: {
                    ...initialState.input
                }
            };

        case actionType.UPDATE_VALIDATION_ERRORS:
            return { 
                ...state,
                input: {
                    ...action.input
                }
            };

        default:
            return state;
    }
}
