import { VFC } from "react";
import baseStyles from "../Spotlight-tile.module.scss";
import styles from "./Scampi.module.scss";

const Scampi: VFC = () => (
  <div
    className={`${baseStyles["spotlight-tile"]}  ${styles.scampi}`}
    aria-hidden="true"
  >
    <div className={baseStyles.inner}>
      <div className={styles.head}>
        <span className={styles.eye}>&nbsp;</span>
        <span className={styles.eye}>&nbsp;</span>
        <span className={styles.nose}>&nbsp;</span>
      </div>
      <div className={styles.body}>
        <span className={styles.paw}>&nbsp;</span>
        <span className={styles.paw}>&nbsp;</span>
      </div>
    </div>
  </div>
);

export default Scampi;
