import styled from "styled-components";

const TagDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 30%;
  border: 1px solid black;
  background-color: #2e2e2e;
  color: #b0b0b0;
  font-weight: 400;

  & .onPage {
    font-weight: bolder;
  }
`;

export { TagDiv };
