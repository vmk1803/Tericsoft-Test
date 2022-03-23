import React from "react";
import { HeaderIcons } from "./Styled-Components/iconStyle";
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

class Icon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HeaderIcons>
        <div className="markers">
          <div>1</div>
          <div>2</div>
        </div>
        <div className="iconDiv">
          <FontAwesomeIcon icon={faStar} size="2x" />
          <span>Featured</span>
        </div>
        <div className="iconDiv">
          <FontAwesomeIcon icon={faGun} size="2x" />
          <span>Armoury</span>
        </div>
        <div className="iconDiv">
          <FontAwesomeIcon icon={faSwimmer} size="2x" />
          <span>Aquatics</span>
        </div>
        <div style={{ backgroundColor: "#393939" }} className="iconDiv">
          <FontAwesomeIcon icon={faBicycle} size="2x" />
          <span>Cycling</span>
        </div>
        <div className="iconDiv">
          <FontAwesomeIcon icon={faHorseHead} size="2x" />
          <span>Equestrian</span>
        </div>
        <div className="iconDiv">
          <FontAwesomeIcon icon={faSkating} size="2x" />
          <span>Extreme</span>
        </div>
        <div className="iconDiv">
          <FontAwesomeIcon icon={faGolfBall} size="2x" />
          <span>Golf</span>
        </div>
        <div className="iconDiv">
          <FontAwesomeIcon icon={faBoxes} size="2x" />
          <span>Gymnastics</span>
        </div>
        <div className="iconDiv">
          <FontAwesomeIcon icon={faWater} size="2x" />
          <span>Lake & Sea</span>
        </div>
      </HeaderIcons>
    );
  }
}

export { Icon };
