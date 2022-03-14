import { VFC } from "react";
import baseStyles from "../Spotlight-tile.module.scss";
import styles from "./Coding.module.scss";

const Coding: VFC = () => (
  <div
    className={`${baseStyles["spotlight-tile"]} ${styles.coding}`}
    aria-hidden="true"
  >
    <div className={`${baseStyles.inner} ${styles.inner}`}>
      <div className={styles.screen}>&nbsp;</div>
    </div>
  </div>
);

export default Coding;
