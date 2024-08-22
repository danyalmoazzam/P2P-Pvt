"use client";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      With insomnia, nothing&apos;s real. Everything is far away. Everything is
      a{" "}
      <Highlight className="text-black dark:text-white">
        copy, of a copy, of a copy.
      </Highlight>
    </HeroHighlight>
  );
}
