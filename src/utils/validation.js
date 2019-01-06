import { isEmail, isEmpty, isNumeric } from 'validator';

export default function(input, amountAvailable) {
    let updatedInput = { ...input };
    let validationError = false;

    // validate email
    if (!isEmail(updatedInput['email'].value)) {
        validationError = true;
        updatedInput = {
            ...updatedInput,
            email: {
                value: updatedInput.email.value,
                error: 'please enter a valid email'
            }
        }
    }

    // validate amount available
    if (amountAvailable < parseInt(input.amount.value)) {
        validationError = true;
        updatedInput = {
            ...updatedInput,
            amount: {
                value: updatedInput.amount.value,
                error: 'you do not have the required amount available to make this transaction'
            }
        }
    }

    // validate amount is a number
    if (!isNumeric(input.amount.value)) {
        validationError = true;
        updatedInput = {
            ...updatedInput,
            amount: {
                value: updatedInput.amount.value,
                error: 'you have not entered a valid number'
            }
        }
    }

    // validate the input fields are not empty
    Object.keys(updatedInput).forEach((key) => {
        if (isEmpty(updatedInput[key].value)) {
            validationError = true;
            updatedInput = {
                ...updatedInput,
                [key]: {
                    value: updatedInput[key].value,
                    error: key !== 'amount' ? `please enter your ${key}` : 'please enter amount'
                }
            }
        }
    });

    return { validationError, updatedInput };
}