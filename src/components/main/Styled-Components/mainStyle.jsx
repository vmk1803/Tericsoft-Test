// consists the styling for main component

import styled from "styled-components";

const MainDiv = styled.div`
  /* border: 1px solid red; */
  background-color: #2e2e2e;
  color: #b0b0b0;
  margin-top: 10px;
  padding: 10px;
  & .highlight {
    display: flex;
    justify-content: flex-start;
    text-decoration: underline;
  }
`;

const DisplayBox = styled.div`
  display: flex;

  & > div {
    margin-right: 10px;
  }
`;

export { MainDiv, DisplayBox };
