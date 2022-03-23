// use of functional components....
import { MainDiv, DisplayBox } from "./Styled-Components/mainStyle";
import { ImageContain } from "./imageContain";
import { useDispatch, useSelector } from "react-redux";
import { add_data } from "../../redux/actions";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import { data } from "../../redux/reducer";

export const Main = () => {
  const mainData = useSelector((state) => state.core);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatchData();
  }, []);

  function dispatchData() {
    const addData = add_data(data);
    dispatch(addData);
  }

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
