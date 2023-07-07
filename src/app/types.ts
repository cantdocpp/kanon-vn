export interface Story {
  showText?: boolean | "no-text";
  speaker?: string;
  text?: string;
  spriteLeft?: string;
  spriteMiddle?: string;
  spriteRight?: string;
  choiceExist?: boolean;
  soundEffect?: string;
  bgm?: any;
  bgImage?: any;
  voice?: any;
  animation?: any;
}

export type Stories = Story[];
