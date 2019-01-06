import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Transaction = ({ name, email, amount }) => (
    <TransactionContainer>
        <TransactionLeft>
            <TransactionName>{name}</TransactionName>
            <small>{email}</small>
        </TransactionLeft>
        <TransactionRight>
            <h4>£{amount}</h4>
        </TransactionRight>
    </TransactionContainer>
);

Transaction.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

const TransactionContainer = styled.div`
    clear: both;
`;

const TransactionLeft = styled.div`
    float: left;
`;

const TransactionRight = styled.div`
    float: right;
`;

const TransactionName = styled.h4`
    margin-bottom: 4px;
`;

export default Transaction;





