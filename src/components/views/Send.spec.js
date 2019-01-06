import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Send from './Send';
import InputList from './InputList';

configure({adapter: new Adapter()});

describe('(Component) Send', () => {
    const wrapper = shallow(
        <Send input={{}} updateInput={() => {}} requestTransaction={() => {}} />
    );
    it('renders', () => {
        expect(wrapper.length).toEqual(1)
    });
    it('renders Title', () => {
        expect(wrapper.find('Title').length).toEqual(1)
    });
    it('renders InputList', () => {
        expect(wrapper.find(InputList).length).toEqual(1)
    });
    it('renders Button', () => {
        expect(wrapper.find('Button').length).toEqual(1)
    });
});