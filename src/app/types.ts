export interface Story {
  showText?: boolean;
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
}

export type Stories = Story[];
