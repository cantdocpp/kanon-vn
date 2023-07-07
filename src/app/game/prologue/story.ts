import { Stories } from "@/app/types";

import YumeNoAto from "./bgm/yume-no-ato.mp3";
import Snow from "./bg/snow.png";
import NayukiBg from "./bg/nayuki-bg.png";
import NayukiSmileBg from "./bg/nayuki-smile-bg.png";

//voice
import Voice0 from "./voice/00.ogg";
import Voice1 from "./voice/01.ogg";
import Voice2 from "./voice/02.ogg";
import Voice3 from "./voice/03.ogg";
import Voice4 from "./voice/04.ogg";
import Voice5 from "./voice/05.ogg";
import Voice6 from "./voice/06.ogg";
import Voice7 from "./voice/07.ogg";
import Voice8 from "./voice/08.ogg";
import Voice9 from "./voice/09.ogg";
import Voice10 from "./voice/10.ogg";
import Voice11 from "./voice/11.ogg";
import Voice12 from "./voice/12.ogg";
import Voice13 from "./voice/13.ogg";
import Voice14 from "./voice/14.ogg";
import Voice15 from "./voice/15.ogg";
import Voice16 from "./voice/16.ogg";
import Voice17 from "./voice/17.ogg";
import Voice18 from "./voice/18.ogg";
import Voice19 from "./voice/19.ogg";
import Voice20 from "./voice/20.ogg";

// animation video
import Intro from "./anm/intro.mp4";

const stories: Stories = [
  { showText: false, bgm: YumeNoAto, bgImage: Snow },
  {
    showText: true,
    text: "It's snowing.",
  },
  { text: "Pure white snow swirls down from the overcast sky." },
  { text: '"A damp wooden bench... cold, clear air..."' },
  { text: "Yuuichi: ......" },
  {
    text: "I rouse my body, slumped on the bench, and correct my posture yet again.",
  },
  {
    text: "The stream of people leaving the snow-covered station has slowed to a trickle.",
  },
  {
    text: "Sighing white vapor, I glance at the town clock in the station plaza. It's three o'clock.",
  },
  {
    text: "It's still daylight, but I can only guess at the position of the sun beyond the thick clouds.",
  },
  {
    text: 'Yuuichi: "...late."',
  },
  {
    text: "I slump back into my seat and cast the single word into the sky.",
  },
  {
    text: "I'm briefly blinded by the white mist of my frozen breath before the north wind sends it streaming away.",
  },
  { text: "A winter wind, piercing my skin..." },
  { text: "The ever-present snow, falling without end..." },
  {
    text: "The curtain of white flakes which hides the sky seems to be thickening out of spite.",
  },
  { text: "Once more I disturb the air with a sigh." },
  {
    text: "This time, however, the puff of steam this evokes is not the only thing that obscures my vision.",
  },
  {
    text: 'Girl: "......"',
    bgImage: NayukiBg,
  },
  {
    text: "A girl is bending over to peer at my face; her head now separates me from the snowy clouds above.",
  },
  {
    text: "Girl: You've got snow on your head.",
    voice: Voice0,
  },
  {
    text: "I breathe out sharply through tight lips, expelling another cloud of vapor.",
  },
  {
    text: "Yuuichi: That might be because I've been sitting here for two hours...",
  },
  {
    text: "Under the circumstances, it's a miracle I'm not buried up to my neck.",
  },
  {
    text: "Girl: ...oh?",
    voice: Voice1,
  },
  { text: "The girl tilts her head curiously at my words." },
  { text: "Girl: What time is it?", voice: Voice2 },
  { text: "Yuuichi: Three o'clock." },
  { text: "Girl: Really? Already?", voice: Voice3 },
  { text: "Despite her words, she doesn't look at all surprised." },
  { text: "Her voice is slow, feminine, and sleepy." },
  { text: "Girl: I thought it was still about two.", voice: Voice4 },
  { text: "...which would only have been one hour late." },
  { text: "Girl: Can I ask you something?", voice: Voice5 },
  { text: "Yuuichi: Go ahead." },
  { text: "Girl: Aren't you cold?", voice: Voice6 },
  { text: "Yuuichi: I sure am." },
  { text: "The snow was a novelty at first, but now it's just depressing me." },
  { text: "Girl: Here.", voice: Voice7 },
  { text: "She hands me a can of coffee." },
  { text: "Girl: To make up for me being late.", voice: Voice8 },
  { text: "Girl: ...and...", voice: Voice9 },
  { text: "Girl: ...to celebrate us meeting again.", voice: Voice10 },
  {
    text: "Yuuichi: Is a reunion after seven years only worth one can of coffee?",
  },
  { text: "I look again into the girl's face as I take the coffee." },
  { text: "The can is still too hot to hold with bare hands." },
  { text: "My numb fingertips appreciate the warmth though." },
  { text: "Girl: Seven years... has it been that long?", voice: Voice11 },
  { text: "Yuuichi: Yeah." },
  { text: "Rolling the warm can between my hands..." },
  {
    text: "Comparing the snowy landscape around me with the few scraps of memory I retain from my early childhood...",
  },
  { text: "Girl: Do you remember my name?", voice: Voice12 },
  { text: "Yuuichi: Do you remember mine?" },
  { text: "Girl: Of course!", voice: Voice13 },
  { text: "In the snow..." },
  { text: "In the snow-covered streets..." },
  {
    text: "Those memories of seven years ago... they seem only to be a breath away.",
  },
  { text: "Girl: Yuuichi.", voice: Voice14 },
  { text: "Yuuichi: Hanako (A generic girls' name)" },
  { text: "Girl: No~!", voice: Voice15 },
  { text: "Yuuichi: Jiro (A generic boys' name)" },
  { text: "Girl: I'm a girl...", voice: Voice16 },
  { text: "She adopts a worried frown" },
  {
    text: "Each word, like the snow which covers the ground, is filling the blank spaces of my memory.",
  },
  {
    text: "The snow falling past the girl's shoulders is getting even heavier.",
  },
  { text: "Yuuichi: Okay, I think we've wasted enough time chatting." },
  { text: "Girl: But... my name...", voice: Voice17 },
  { text: "Yuuichi: Shall we get moving?" },
  { text: "Girl: My name...", voice: Voice18 },
  { text: "The town of seven years ago..." },
  { text: "Surrounded by the snow of seven years ago..." },
  { text: "Yuuichi: Let's go, Nayuki." },
  {
    text: "My new life, caught like a flag in the winter wind, spreads out before me.",
  },
  { text: "Nayuki: Eh...?", voice: Voice19 },
  { text: "Nayuki: Okay!", voice: Voice20, bgImage: NayukiSmileBg },
  { showText: "no-text", bgm: "no-bgm", animation: Intro },
];

export default stories;
