"use client";

import React from "react";
import { useRouter } from "next/navigation";

import GameContainer from "@/components/GameContainer";
import Say from "@/components/Say";
import GameLoading from "../GameLoading/GameLoading";

import { Stories } from "@/app/types";

interface Props {
  stories: Stories;
  nextRoute: string;
}

export default function Gameplay({ stories, nextRoute }: Props) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [storyIndex, setStoryIndex] = React.useState(0);
  const [showTextbox, setShowTextBox] = React.useState(false);
  const [text, setText] = React.useState("");
  const [bgImage, setBgImage] = React.useState("");
  const [bgm, setBgm] = React.useState("");
  const [voice, setVoice] = React.useState("");
  const [animation, setAnimation] = React.useState("");
  const lastIndex = stories.length === storyIndex;

  React.useEffect(() => {
    if (lastIndex) {
      setLoading(true);
      router.push(nextRoute);
      return;
    }

    const story = stories[storyIndex];

    if (story.showText) {
      if (story.showText == "no-text") {
        setShowTextBox(false);
      } else {
        setShowTextBox(story.showText);
      }
    }
    if (story.text) {
      setText(story.text);
    }
    if (story.bgm) {
      if (story.bgm === "no-bgm") {
        setBgm("");
      } else {
        setBgm(story.bgm);
      }
    }
    if (story.bgImage) {
      if (story.bgImage === "no-image") {
        setBgImage("");
      } else {
        setBgImage(story.bgImage);
      }
    }
    if (story.voice) {
      setVoice(story.voice);
    } else {
      setVoice("");
    }
    if (story.animation) {
      setAnimation(story.animation);
    }
  }, [storyIndex]);

  const handleClick = () => {
    if (lastIndex) {
      return;
    }
    setStoryIndex((index) => index + 1);
  };

  return (
    <GameContainer
      bgImage={bgImage}
      bgMusic={bgm}
      animation={animation}
      onClick={handleClick}
    >
      {loading && <GameLoading />}
      {showTextbox && <Say text={text} voice={voice}></Say>}
    </GameContainer>
  );
}
