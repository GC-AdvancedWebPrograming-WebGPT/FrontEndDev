import React from 'react';
import styled from "styled-components";

const StyledButtonCondition = styled.button`
    width: 100%;
    height: 100%;
    background: ${(props) => props.background};
    font-style: bold;
    font-weight: bold;
    font-size: 19px;
    border: 1px;
`;

const Box = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: ${(props) => props.background};
    border: 1px;
`

function ButtonCondition({ bgColor, ButtonName, btnID, onConditionChange }) {
  return (
    <Box>
      <StyledButtonCondition onClick={() => onConditionChange(btnID)} background={bgColor}> {ButtonName}
      </StyledButtonCondition>
    </Box>
  );
}

export default ButtonCondition;