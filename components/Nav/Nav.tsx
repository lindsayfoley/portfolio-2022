import React from "react";
import { Button } from "components";
import { ButtonProps } from "components/Button/Button";

export interface NavProps {
  buttonArr: ButtonProps[];
}

const Nav: React.FunctionComponent<NavProps> = ({ buttonArr }) => {
  if (!buttonArr || buttonArr.length === 0) {
    return null;
  }

  return (
    <nav>
      {buttonArr.map((button) => (
        <Button {...button} key={button.cta} />
      ))}
    </nav>
  );
};

export default Nav;
