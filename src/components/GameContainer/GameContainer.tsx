"use client";

import React from "react";

import type { StaticImageData } from "next/image";
import { Howl } from "howler";

import styles from "./style.module.css";

interface Props {
  children: React.ReactNode;
  bgImage: string | StaticImageData;
  bgMusic: string;
}

export default function GameContainer({ children, bgImage, bgMusic }: Props) {
  React.useEffect(() => {
    if (!bgMusic) {
      return;
    }
    const sound = new Howl({
      src: [bgMusic],
      loop: true,
      volume: 0.8,
    });

    sound.play();
  }, [bgMusic]);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${
          typeof bgImage === "object" ? bgImage.src : bgImage
        })`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
