"use client";

import React from "react";

import styles from "./say.module.css";

interface Props {
  text: string;
  delay?: number;
}

export default function Say({ text, delay = 30 }: Props) {
  const [message, _] = React.useState(text);
  const [displayed, updateDisplay] = React.useState("");

  let animID: NodeJS.Timer;
  React.useEffect(() => {
    updateDisplay(message.charAt(0));
    animID = setInterval(typeLetter, delay);
    return () => {
      updateDisplay("");
      clearInterval(animID);
    };
  }, [text]);

  const typeLetter = () => {
    updateDisplay((prevText) => {
      if (message.length <= prevText.length) clearInterval(animID);
      return prevText.concat(message.charAt(prevText.length));
    });
  };

  return <div className={styles.box}>{displayed}</div>;
}
