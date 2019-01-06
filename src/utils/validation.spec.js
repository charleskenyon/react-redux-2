import validation from './validation';

describe('utils', () => {
    describe('validation utility function', () => {
        let input;
        const restoreInput = () => ({
            name: { error: '', value: 'Test' },
            email: { error: '', value: 'test@hotmail.com' },
            amount: { error: '', value: '1' }
        });
        beforeEach(() => input = restoreInput());

        it('should return validationError equals false if there are no validation errors', () => {
            const { validationError } = validation(input, 10000)
            expect(validationError).toEqual(false);
        });

        it('should return validationError equals true if an incorrect email has been used', () => {
            input.email.value = 'not an email';
            const errorMessage = 'please enter a valid email';
            const { validationError, updatedInput } = validation(input, 10000)
            expect(validationError).toEqual(true);
            expect(updatedInput.email.error).toEqual(errorMessage);
        });

        it('should return validationError equals true if an you do not have the required amount', () => {
            input.amount.value = '2';
            const errorMessage = 'you do not have the required amount available to make this transaction';
            const { validationError, updatedInput } = validation(input, 1)
            expect(validationError).toEqual(true);
            expect(updatedInput.amount.error).toEqual(errorMessage);
        });

        it('should return validationError equals true if an you do not enter a number into amount', () => {
            input.amount.value = 'not a number';
            const errorMessage = 'you have not entered a valid number';
            const { validationError, updatedInput } = validation(input, 1)
            expect(validationError).toEqual(true);
            expect(updatedInput.amount.error).toEqual(errorMessage);
        });

        it('should return validationError equals true if any of the fields are empty', () => {
            input.amount.value = '';
            const errorMessage = 'please enter amount';
            const { validationError, updatedInput } = validation(input, 1)
            expect(validationError).toEqual(true);
            expect(updatedInput.amount.error).toEqual(errorMessage);
        });
    });
});