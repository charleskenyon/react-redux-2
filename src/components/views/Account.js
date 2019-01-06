import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Infographic from './Infographic';
import TransactionList from './TransactionList';

const Account = ({ initialAmount, totalSent, transactions }) => (
    <div>
        <Title>My account</Title>
        <Infographic initialAmount={initialAmount} totalSent={totalSent} />
        <TransactionList transactions={transactions} />
    </div>
);

Account.propTypes = {
    initialAmount: PropTypes.number.isRequired,
    totalSent: PropTypes.number.isRequired,
    transactions: PropTypes.array.isRequired
}

const Title = styled.h1`
    font-family: 'Alverata Black';
`;

Title.displayName = 'Title';

export default Account;
