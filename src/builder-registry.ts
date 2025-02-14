"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
// import Page from "./app/_old_pages_1/__[...page]";
import Page from "./app/[...page]/page";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Page, {
  name: "Page",
  inputs: [
    {
      name: "page",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "BuilderContent",
      },
      required: true,
    },
  ],
});
