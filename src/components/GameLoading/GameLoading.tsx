"use client";

import styles from "./styles.module.css";
import ReactLoading from "react-loading";

export default function GameLoading() {
  return (
    <div className={styles.overlay}>
      <ReactLoading
        type="spin"
        color="rgb(0, 3, 68, 0.8)"
        height={"20%"}
        width={"20%"}
      />
    </div>
  );
}
