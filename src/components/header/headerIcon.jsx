import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBicycle,
  faSwimmer,
  faGolfBall,
  faWater,
  faGun,
  faHorseHead,
  faSkating,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const HeaderIcons = styled.div`
  display: flex;
  /* border: 1px solid red; */
  padding: 8px 0;
  justify-content: space-evenly;
  align-items: center;
  background-color: #2e2e2e;
  color: white;

  & span {
    display: block;
    font-size: 10px;
  }

  & div {
    /* border: 1px solid blue; */
    width: 7%;
    padding: 1.7% 0;
    border-radius: 80px;
    text-align: center;
    background-color: #303030;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  }
`;

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderIcons>
        <div>
          <FontAwesomeIcon icon={faStar} size="2x" />
          <span>Featured</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faGun} size="2x" />
          <span>Armoury</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faSwimmer} size="2x" />
          <span>Aquatics</span>
        </div>
        <div style={{ backgroundColor: "#393939" }}>
          <FontAwesomeIcon icon={faBicycle} size="2x" />
          <span>Cycling</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faHorseHead} size="2x" />
          <span>Equestrian</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faSkating} size="2x" />
          <span>Extreme</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faGolfBall} size="2x" />
          <span>Golf</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faBoxes} size="2x" />
          <span>Gymnastics</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faWater} size="2x" />
          <span>Lake & Sea</span>
        </div>
      </HeaderIcons>
    );
  }
}

export { Icon };
