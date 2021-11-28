import React from "react";
import styled from "styled-components";

function ClearBtn() {
  return <ClearBtnStyled>Clear All</ClearBtnStyled>;
}

const ClearBtnStyled = styled.button`
  display: inline-block;
  border: orange 3px solid;
  padding: 1rem 2rem;
  font-size: 1.7rem;
  font-family: inherit;
  font-weight: bold;
  color: #333;
  width: 90%;
  max-width: 500px;

  margin: 3rem auto;
`;

export default ClearBtn;
