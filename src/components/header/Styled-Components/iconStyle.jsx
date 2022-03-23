import styled from "styled-components";

const HeaderIcons = styled.div`
  display: flex;
  padding: 8px 0;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2e2e2e;
  color: #b0b0b0;

  & span {
    display: block;
    font-size: 10px;
  }
  & .markers {
    height: 70px;
    position: absolute;
    z-index: 1.5;
    left: 11%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
  }

  & > div:nth-child(1) div {
    border: 1px solid #b0b0b0;
    width: 20px;
    border-radius: 14px;
    background-color: #b0b0b0;
  }

  & .iconDiv {
    width: 8%;
    padding: 1.5% 0;
    border-radius: 80px;
    text-align: center;
    background-color: #303030;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  }
`;

export { HeaderIcons };
