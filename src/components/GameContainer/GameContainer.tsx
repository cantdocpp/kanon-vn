"use client";

import React from "react";

import type { StaticImageData } from "next/image";
// @ts-ignore
import { Howl } from "howler";

import styles from "./style.module.css";

interface Props {
  children: React.ReactNode;
  bgImage: string | StaticImageData;
  bgMusic?: any;
  animation?: any;
  onClick?: () => void;
}

export default function GameContainer({
  children,
  bgImage,
  bgMusic,
  animation,
  onClick,
}: Props) {
  React.useEffect(() => {
    if (!bgMusic) {
      return;
    }
    const sound = new Howl({
      src: [bgMusic],
      loop: true,
      volume: 0.8,
      preload: true,
    });

    sound.play();

    return () => sound.stop();
  }, [bgMusic]);

  return (
    <>
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${
            typeof bgImage === "object" ? bgImage.src : bgImage
          })`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
        onClick={onClick}
      >
        {animation && (
          <video autoPlay className={styles.video} onEnded={onClick}>
            <source src={animation} type="video/mp4" />
          </video>
        )}
        {children}
      </div>
    </>
  );
}
