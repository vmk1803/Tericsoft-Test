import React from "react";
import { Icon } from "./headerIcon";
import { Tags } from "./tags";

// joining both the components Icon and Tags

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Icon />
        <Tags />
      </div>
    );
  }
}

export { Header };
