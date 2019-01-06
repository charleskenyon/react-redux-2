import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({ name, input, updateInput }) => (
    <InputContainer>
        <Label>{name}</Label>
        <TextInput type="text" id={name} value={input.value} 
            onInput={(e) => updateInput(e.target.value, name)} 
            error={input.error !== '' ? true : false} />
        <ErrorMessage>{input.error}</ErrorMessage>
    </InputContainer>
);

Input.propTypes = {
    name: PropTypes.string.isRequired,
    input: PropTypes.object
}

const InputContainer = styled.div`
    height: 100px;
`;

const Label = styled.label`
    display: block;
    text-transform: capitalize;
    font-size: 14px;
    color: #333333;
    font-weight: 500;
`;

const TextInput = styled.input`
    background: transparent;
    border: none;
    border-bottom: ${props => props.error ? '1.5px solid #FF0000' : '1.5px solid #C0C0C0'};
    outline: none;
    width: 100%;
    height: 35px;
    font-size: 18px;
`;

const ErrorMessage = styled.small`
    color: #FF0000;
`;

export default Input;
