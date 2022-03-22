// use of functional components....
import styled from "styled-components";
import { ImageContain } from "./imageContain";
import { useSelector } from "react-redux";

const MainDiv = styled.div`
  /* border: 1px solid red; */
  background-color: #2e2e2e;
  color: white;
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
