"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteTechStack = ({
  items,
  direction = "up", // Supports "up", "down"
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: string[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
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
        case "up":
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
          containerRef.current.style.setProperty("--flex-direction", "column");
          break;
        case "down":
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
          containerRef.current.style.setProperty("--flex-direction", "column");
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
        "scroller relative overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0",
          "flex-col animate-scrolly2",
          start,
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{ padding: '0', margin: '0' }} // Ensure no extra padding/margin on ul
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="z-5 lg:py-4 lg:px-3 py-8 px-3 text-xs lg:text-base opacity-50 lg:opacity-80 rounded-lg text-center bg-[#10132E]"
            style={{
              backgroundColor:"linear-gradient(180deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)", // Gradient for up/down
              marginBottom:  '20px', // Adjust spacing if necessary
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
