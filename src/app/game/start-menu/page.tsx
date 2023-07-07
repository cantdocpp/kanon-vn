"use client";

import React from "react";

import GameContainer from "@/components/GameContainer";
import GameLoading from "@/components/GameLoading";

import HomeMenuBg from "./bg/start-bg.png";
import Logo from "./bg/logo.png";
import Asakage from "./bgm/asakage.mp3";

import styles from "./style.module.css";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function StartMenu() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  return (
    <GameContainer bgImage={HomeMenuBg} bgMusic={Asakage}>
      <Image fill src={Logo} priority={true} alt="Kanon logo" />

      {loading && <GameLoading />}

      <ul className={styles.menu}>
        <li
          className={styles.menuItem}
          onClick={() => {
            setLoading(true);
            router.push("/game/prologue");
          }}
        >
          New Game
        </li>
      </ul>
    </GameContainer>
  );
}
