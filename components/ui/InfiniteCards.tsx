"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left", // Supports "left", "right", "up", "down"
  speed = "fast",
  pauseOnHover = true,
  gradientEnabled = true, // New prop to control gradient
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right" | "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  gradientEnabled?: boolean; // New optional prop
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      switch (direction) {
        case "left":
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
          containerRef.current.style.setProperty("--flex-direction", "row");
          containerRef.current.style.setProperty(
            "--gradient-direction",
            "to right"
          );
          break;
        case "right":
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
          containerRef.current.style.setProperty("--flex-direction", "row");
          containerRef.current.style.setProperty(
            "--gradient-direction",
            "to right"
          );
          break;
        case "up":
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
          containerRef.current.style.setProperty("--flex-direction", "column");
          containerRef.current.style.setProperty(
            "--gradient-direction",
            "to bottom"
          );
          break;
        case "down":
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
          containerRef.current.style.setProperty("--flex-direction", "column");
          containerRef.current.style.setProperty(
            "--gradient-direction",
            "to bottom"
          );
          break;
        default:
          break;
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden",
        className
      )}
      style={{
        maskImage: gradientEnabled
          ? `linear-gradient(var(--gradient-direction), transparent, white 20%, white 80%, transparent)`
          : "none", // Disable gradient if gradientEnabled is false
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 flex-nowrap",
          start,
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "up" || direction === "down"
            ? "flex-col animate-scrolly"
            : "flex-row animate-scrollx"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[90vw] max-w-full relative rounded-2xl border border-b-0
            flex-shrink-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                direction === "left" || direction === "right"
                  ? "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"
                  : "linear-gradient(180deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)", // Gradient for up/down
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <div className="me-3">
                  <img src="/profile.svg" alt="profile" />
                </div>
                <span className="flex flex-col gap-1">
                  <span className="text-xl font-bold leading-[1.6] text-white">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-white-200 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
