"use client";

import React from "react";

import GameContainer from "@/components/GameContainer";
import Say from "@/components/Say";

// import YumeNoAto from "./bgm/yume-no-ato.mp3";
// import Snow from "./bg/snow.png";
import Stories from "./story";

export default function CommonRoutePartOne() {
  const [storyIndex, setStoryIndex] = React.useState(0);
  const [showTextbox, setShowTextBox] = React.useState(false);
  const [text, setText] = React.useState("");
  const [bgImage, setBgImage] = React.useState("");
  const [bgm, setBgm] = React.useState("");
  const [voice, setVoice] = React.useState("");
  const lastIndex = Stories.length === storyIndex;

  React.useEffect(() => {
    if (lastIndex) {
      return;
    }

    const story = Stories[storyIndex];

    if (story.showText) {
      setShowTextBox(story.showText);
    }
    if (story.text) {
      setText(story.text);
    }
    if (story.bgm) {
      setBgm(story.bgm);
    }
    if (story.bgImage) {
      setBgImage(story.bgImage);
    }
    if (story.voice) {
      setVoice(story.voice);
    } else {
      setVoice("");
    }
  }, [storyIndex]);

  const handleClick = () => {
    if (lastIndex) {
      return;
    }
    setStoryIndex((index) => index + 1);
  };

  return (
    <GameContainer bgImage={bgImage} bgMusic={bgm} onClick={handleClick}>
      {showTextbox && <Say text={text} voice={voice}></Say>}
    </GameContainer>
  );
}
