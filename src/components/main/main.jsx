// use of functional components....
import { MainDiv, DisplayBox } from "./Styled-Components/mainStyle";
import { ImageContain } from "./imageContain";
import { useSelector } from "react-redux";

export const Main = () => {
  const mainData = useSelector((state) => state.data.core);

  return (
    <>
      {mainData.map((e) => {
        if (e.pageTitle === "CYCLING") {
          return (
            <MainDiv key={e.id}>
              <div className="highlight">
                <h2>Highlights</h2>
              </div>
              <DisplayBox>
                {e.pageData.map((item) => (
                  <ImageContain props={item} key={item.id} />
                ))}
              </DisplayBox>
            </MainDiv>
          );
        }
      })}
    </>
  );
};
