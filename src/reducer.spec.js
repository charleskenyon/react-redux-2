import { reducer, initialState } from './reducer';
import * as actionType from './constants/ActionTypes';

describe('reducer', () => {
    it ('returns the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it ('handles update input', () => {
        const action = { 
            type: actionType.UPDATE_INPUT, 
            value: 'test', 
            inputType: 'name' 
        }
        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            input: {
                ...initialState.input,
                [action.inputType]: {
                    ...initialState.input[action.inputType],
                    value: action.value
                }
            }
        });
    });

    it ('handles send funds', () => {
        const action = { 
            type: actionType.SEND_FUNDS, 
            transaction: { name: 'test', amount: 1 } 
        }
        expect(reducer(initialState, action)).toEqual({
            ...initialState, 
            transactions: [action.transaction],
            totalSent: initialState.totalSent + action.transaction.amount
        });
    });
    
    it ('handles update form validation errors', () => {
        const action = { 
            type: actionType.UPDATE_VALIDATION_ERRORS, 
            input: { 'name': { value: 'test', error: 'error'} } 
        }
        expect(reducer(initialState, action)).toEqual({
            ...initialState, 
            input: {
                ...action.input
            }
        });
    });
});