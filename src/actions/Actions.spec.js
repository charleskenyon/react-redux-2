import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../reducer';
import * as validation from '../utils/validation';
import * as actions from './Actions';
import * as actionType from '../constants/ActionTypes';

describe('actions', () => {
    describe('requestTransaction action', () => {
        const mockStore = configureMockStore([thunk]);
        const store = mockStore(initialState);
        afterEach(() => store.clearActions());

        it ('should call getState function', () => {
            const dispatch = jest.fn();
            const getState = jest.fn(() => (initialState));
            actions.requestTransaction()(dispatch, getState);
            expect(getState).toHaveBeenCalled();
        });

        it ('should call validation function', () => {
            const spy = jest.spyOn(validation, 'default')
            store.dispatch(actions.requestTransaction())
            expect(spy).toHaveBeenCalledWith(initialState.input, 10000);
        });

        it ('should create UPDATE_VALIDATION_ERRORS action when validation returns validationError equals true', () => {
            validation.default = jest.fn(() => ({ updatedInput: {}, validationError: true }));
            store.dispatch(actions.requestTransaction())

            const expectedActions = [
                { type: actionType.UPDATE_VALIDATION_ERRORS, input: {}}
            ];

            expect(store.getActions()).toEqual(expectedActions);
        });

        it ('should create SEND_FUNDS action when validation returns validationError equals false', () => {
            validation.default = jest.fn(() => ({ updatedInput: {}, validationError: false }));
            store.dispatch(actions.requestTransaction());
            const keys = ['name', 'email', 'amount', 'key',];
            expect(store.getActions()[0].type).toEqual(actionType.SEND_FUNDS);
            expect(Object.keys(store.getActions()[0].transaction)).toEqual(keys);
        });
    });
});