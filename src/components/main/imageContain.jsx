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

export const ImageContain = ({ props }) => {
  const style = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "20%",
    // border: "1px solid red",
    paddingTop: "250px",
    backgroundPosition: "center",
    // paddingBottom: "20px",
  };

  return (
    <div style={style}>
      <ImageDetails>
        <div className="title">
          <p>{props.title}</p>
          <span>5:12</span>
        </div>
        <div className="tags">
          {props.tags.map((tag) => (
            <TagButton key={tag.id}>{tag.tagName}</TagButton>
          ))}
        </div>
      </ImageDetails>
    </div>
  );
};
