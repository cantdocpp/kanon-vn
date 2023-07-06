"use client";

import React from "react";

import GameContainer from "@/components/GameContainer";
import Say from "@/components/Say";

import { Stories } from "@/app/types";

interface Props {
  stories: Stories;
}

export default function Gameplay({ stories }: Props) {
  const [storyIndex, setStoryIndex] = React.useState(0);
  const [showTextbox, setShowTextBox] = React.useState(false);
  const [text, setText] = React.useState("");
  const [bgImage, setBgImage] = React.useState("");
  const [bgm, setBgm] = React.useState("");
  const [voice, setVoice] = React.useState("");
  const lastIndex = stories.length === storyIndex;

  React.useEffect(() => {
    if (lastIndex) {
      return;
    }

    const story = stories[storyIndex];

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
