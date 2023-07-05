"use client";

import GameContainer from "@/components/GameContainer";
import Say from "@/components/Say";

import YumeNoAto from "./bgm/yume-no-ato.mp3";
import Snow from "./bg/snow.png";

export default function CommonRoutePartOne() {
  return (
    <GameContainer bgImage={Snow} bgMusic={YumeNoAto}>
      <Say text="asdassad"></Say>
    </GameContainer>
  );
}
