import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './Input';

const InputList = ({ input, updateInput }) => {
    
    const nodes = Object.keys(input).map((key) => (
        <Input key={key} name={key} input={input[key]} updateInput={updateInput} />
    ));

    return (
        <InputListContainer>{nodes}</InputListContainer>
    )
}

InputList.propTypes = {
    input: PropTypes.object.isRequired
}

const InputListContainer = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    height: 300px;
`;

export default InputList;