"use client";

import React from "react";
import { Howl } from "howler";

import styles from "./say.module.css";

interface Props {
  text: string;
  delay?: number;
  voice?: any;
}

export default function Say({ text, delay = 20, voice }: Props) {
  const [displayed, updateDisplay] = React.useState("");

  let animID: NodeJS.Timer;
  React.useEffect(() => {
    updateDisplay(text.charAt(0));
    animID = setInterval(typeLetter, delay);

    return () => {
      updateDisplay("");
      clearInterval(animID);
    };
  }, [text]);

  React.useEffect(() => {
    if (!voice) {
      return;
    }
    const sound = new Howl({
      src: [voice],
      loop: false,
      volume: 1.0,
      preload: true,
    });

    sound.play();

    return () => {
      sound.stop();
    };
  }, [voice]);

  const typeLetter = () => {
    updateDisplay((prevText) => {
      if (text.length <= prevText.length) clearInterval(animID);
      return prevText.concat(text.charAt(prevText.length));
    });
  };

  return <div className={styles.box}>{displayed}</div>;
}
