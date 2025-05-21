"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bookmark, Star, Pen, Lightbulb, Network } from "lucide-react";
import { cn } from "@/lib/utils";

interface TagProps {
  icon: React.JSX.Element;
  label: string;
  active?: boolean;
}

const tags: TagProps[] = [
  { icon: <Bookmark className="w-4 h-4 mr-2" />, label: "All", active: true },
  { icon: <Star className="w-4 h-4 mr-2" />, label: "Featured" },
  { icon: <Pen className="w-4 h-4 mr-2" />, label: "Design & Inspiration" },
  { icon: <Lightbulb className="w-4 h-4 mr-2" />, label: "Tips" },
  { icon: <Network className="w-4 h-4 mr-2" />, label: "Industry Insights" },
];

export default function Hero() {
  const [activeTags, setActiveTags] = useState<TagProps[]>(tags);

  const handleActiveTag = (clickedTagLabel: string) => {
    setActiveTags((prevTags) =>
      prevTags.map((tag) => ({
        ...tag,
        active: tag.label === clickedTagLabel,
      }))
    );
  };

  return (
    <div className="pt-16 md:pt-25 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
      <Card className="bg-[#F7F2E9] rounded-sm p-2 sm:p-3 flex flex-row justify-center items-center gap-2 max-w-xs">
        <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="text-xs sm:text-sm font-Inter font-semibold text-[#41403F] uppercase">
          The Architect's Notebook
        </span>
      </Card>

      <h1 className="mt-3 sm:mt-4 mb-6 sm:mb-8 font-Inter text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1B1B17] max-w-3xl leading-snug sm:leading-tight px-2">
        Peek behind the scenes of groundbreaking designs, timeless tips, and the
        architectural world that inspires us every day.
      </h1>

      <div className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {activeTags.map((tag) => (
          <Button
            key={tag.label}
            variant={tag.active ? "default" : "outline"}
            onClick={() => handleActiveTag(tag.label)}
            className={cn(
              "text-sm sm:text-md flex items-center px-4 sm:px-6 py-2 sm:py-4 rounded-sm gap-1 sm:gap-2 cursor-pointer border",
              tag.active ? "bg-[#1B1B17] text-white" : "bg-gray-50/300"
            )}
          >
            {tag.icon &&
              React.cloneElement(tag.icon, {
                className: "w-3 h-3 sm:w-4 sm:h-4",
              })}
            {tag.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
