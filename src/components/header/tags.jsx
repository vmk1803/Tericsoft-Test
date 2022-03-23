import React from "react";
import { TagDiv } from "./Styled-Components/tagStyle";
import { store } from "../../redux/store";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagNames: store.getState().data.tags,
    };
  }

  store = () => {
    store.subscribe(() => {
      this.setState({
        tagNames: store.getState().data.tags,
      });
    });
  };

  render() {
    const { tagNames } = this.state;
    return (
      <TagDiv>
        {tagNames.map((tag) => (
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
