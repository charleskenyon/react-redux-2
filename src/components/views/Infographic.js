import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CircularProgressbar from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const Infographic = ({ initialAmount, totalSent }) => (
    <InfographicContainer>
        <InfographicColumn>
            <InfographicTitle>£{totalSent}</InfographicTitle>
            <InfographicSubTitle>total sent</InfographicSubTitle>
        </InfographicColumn>
        <InfographicColumn>
            <StyledCircularProgressbar percentage={Math.round((totalSent / initialAmount) * 100)} strokeWidth={22} />
        </InfographicColumn>
        <InfographicColumn>
            <InfographicTitle>£{initialAmount - totalSent}</InfographicTitle>
            <InfographicSubTitle>left available</InfographicSubTitle>
        </InfographicColumn>
    </InfographicContainer>
);

Infographic.propTypes = {
    initialAmount: PropTypes.number.isRequired,
    totalSent: PropTypes.number.isRequired
}

const InfographicContainer = styled.div`
    margin-top: 70px;
    margin-bottom: 40px;
`;

const InfographicColumn = styled.div`
    width: calc(100%  /3);
    display: inline-block;
`;

const InfographicTitle = styled.p`
    font-weight: 600;
    margin: 0;
`;

const InfographicSubTitle = styled.p`
    margin-top: 5px;
`;

const StyledCircularProgressbar = styled(CircularProgressbar)`
    && {
        width: 50px;
        path:nth-of-type(2) {
            stroke: #FFA500;
            stroke-linecap: initial;
        }
    }
`;

export default Infographic;