import React from "react";
import Link from "next/link";
import styles from "./Button.module.scss";

export interface ButtonProps {
  link: string;
  cta: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({ link, cta }) => (
  <Link href={link}>
    <a className={styles.button} itemProp="url">
      {cta}
    </a>
  </Link>
);

export default Button;
