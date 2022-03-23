import { TagButton, ImageDetails } from "./Styled-Components/imageContainStyle";

export const ImageContain = ({ props }) => {
  const style = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "20%",
    paddingTop: "250px",
    backgroundPosition: "center",
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
