"use client";

import React from "react";

import Gameplay from "@/components/Gameplay/Gameplay";

import stories from "./story";

export default function Prologue() {
  return <Gameplay stories={stories} />;
}
