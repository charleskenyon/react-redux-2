import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputList from './InputList';

const Send = ({ input, updateInput, requestTransaction }) => (    
    <div>
        <Title> Send Money </Title>
        <InputList input={input} updateInput={updateInput} />
        <Button type="button" onClick={() => requestTransaction()}>Send</Button>
    </div>
);

Send.propTypes = {
    input: PropTypes.object.isRequired
}

const Title = styled.h1`
    font-family: 'Alverata Black';
`;

const Button = styled.button`
    background-color: #8A2BE2;
    border-radius: 25px;
    width: 100%;
    padding: 12px;
    border: 0;
    box-shadow: none;
    color: white;
    font-weight: 600;
    letter-spacing: 1.4px;    ;

    :hover {
        background-color: #7C26CB;
        cursor: pointer;
    }
`
Title.displayName = 'Title';
Button.displayName = 'Button';

export default Send;
