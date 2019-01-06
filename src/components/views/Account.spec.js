import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Account from './Account';
import Infographic from './Infographic';
import TransactionList from './TransactionList';

configure({adapter: new Adapter()});

describe('(Component) Account', () => {
    const wrapper = shallow(
        <Account initialAmount={10000} totalSent={0} transactions={[]} />
    );
    it('renders', () => {
        expect(wrapper.length).toEqual(1)
    });
    it('renders Title', () => {
        expect(wrapper.find('Title').length).toEqual(1)
    });
    it('renders Infographic', () => {
        expect(wrapper.find(Infographic).length).toEqual(1)
    });
    it('renders TransactionList', () => {
        expect(wrapper.find(TransactionList).length).toEqual(1)
    });
});