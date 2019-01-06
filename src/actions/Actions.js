import * as actionType from '../constants/ActionTypes';
import validation from '../utils/validation';

export function updateInput(value, inputType) {
    return {
        type: actionType.UPDATE_INPUT,
        value,
        inputType
    }
} 

export function requestTransaction() {
    return (dispatch, getState) => {
        const { input, initialAmount, totalSent } = getState();
        const amountAvailable = initialAmount - totalSent;
        const { updatedInput, validationError } = validation(input, amountAvailable);

        if (validationError) {
            dispatch(updateValidationErrors(updatedInput))
        } else {
            dispatch(sendFunds({
                name: input.name.value,
                email: input.email.value,
                amount: parseInt(input.amount.value),
                key: new Date().getTime()
            }));
        }
    }
} 

function sendFunds(transaction) {
    return {
        type: actionType.SEND_FUNDS,
        transaction
    }
}

function updateValidationErrors(input) {
    return {
        type: actionType.UPDATE_VALIDATION_ERRORS,
        input
    }
}
