// All styling related to image container..


import styled from "styled-components";

const TagButton = styled.div`
  padding: 2%;
  margin-right: 3%;
  margin-left: 3%;
  font-weight: 500;
  font-size: 12px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  background-color: #646464;
`;

const ImageDetails = styled.div`
  opacity: 0.7;
  padding: 5px;
  color: white;
  font-weight: bold;
  background-color: #424242;
  & .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & .tags {
    display: flex;
  }
`;

export { TagButton, ImageDetails };
