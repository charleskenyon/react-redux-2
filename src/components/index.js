import React from 'react';
import styled from 'styled-components';
import SendContainer from './containers/SendContainer';
import AccountContainer from './containers/AccountContainer';

const App = ({ className }) => (
    <Container className={className}>
        <Column>
            <SendContainer />
        </Column>
        <Column>
            <AccountContainer />
        </Column>
    </Container>
);

const Container = styled.div`
    width: 100%;
`;

const Column = styled.div`
    display: inline-block;
    width: 50%;
    vertical-align: top;
    padding: 40px 50px 40px 50px;
    box-sizing: border-box;
`;

export default App;
