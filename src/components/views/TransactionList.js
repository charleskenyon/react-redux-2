import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Transaction from './Transaction';

const TransactionList = ({ transactions }) => {
    
    const nodes = transactions.map((transaction) => (
        <Transaction {...transaction} />
    ));

    return (
        <div>
            <TransactionTitle>Transactions</TransactionTitle>
            {nodes}
        </div>
    )
}

TransactionList.propTypes = {
    transactions: PropTypes.array.isRequired
}

const TransactionTitle = styled.h3`
    margin-bottom: 10px;
`;

export default TransactionList;
