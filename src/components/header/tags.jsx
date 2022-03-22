import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { store } from "../../redux/store";

const TagDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 30%;
  border: 1px solid black;
  background-color: #2e2e2e;
  color: white;
  font-weight: 400;

  & .onPage {
    font-weight: bolder;
  }
`;

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagName: store.getState(),
    };
  }

  render() {
    const { tagName } = this.state;
    return (
      <TagDiv>
        {tagName.data.tags.map((tag) => (
          <div key={tag.id}>
            <p className={tag.tagName === "BMX" ? "onPage" : null}>
              {tag.tagName}
            </p>
          </div>
        ))}
      </TagDiv>
    );
  }
}

export { Tags };
