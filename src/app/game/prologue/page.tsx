"use client";

import React from "react";

import Gameplay from "@/components/Gameplay/Gameplay";

import stories from "./story";

export default function Prologue() {
  const nextRoute = "/game/common-route/part-1";

  return <Gameplay stories={stories} nextRoute={nextRoute} />;
}
