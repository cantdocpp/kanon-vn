"use client";

import React from "react";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function RouteProgress({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="yellow"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
