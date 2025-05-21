"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, CornerDownRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Article {
  id: number;
  image: string;
  date: string;
  categories: string[];
  author: {
    name: string;
    avatar: string;
  };
  title: string;
}

const articles: Article[] = [
  {
    id: 1,
    image:
      "https://framerusercontent.com/images/5bchTkoNu02pNVTPU87gLYTDyic.png",
    date: "DEC 5, 2024",
    categories: ["TIPS"],
    author: { name: "RYAN MILFORD", avatar: "/images/ryan.jpg" },
    title: `How to turn "cozy" into “wow”: 5 Pro Tips for Making the Most of Small Spaces`,
  },
  {
    id: 2,
    image:
      "https://framerusercontent.com/images/jYW9wJIJ6gCfJ3QugzwOC71R71s.png",
    date: "DEC 5, 2024",
    categories: ["DESIGN & INSPIRATION"],
    author: { name: "JAMES MILLER", avatar: "/images/james.jpg" },
    title: `Turning Spaces into Stories: How We Create Meaningful Architecture`,
  },
  {
    id: 3,
    image:
      "https://framerusercontent.com/images/FTtJr45CgfFLoTqV6dVzL0hGZ4.png",
    date: "SEP 24, 2024",
    categories: ["INDUSTRY INSIGHTS"],
    author: { name: "JAMES MILLER", avatar: "/images/james.jpg" },
    title: `Retail Revolution: How Architecture Is Transforming Shopping Experiences`,
  },
  {
    id: 4,
    image:
      "https://framerusercontent.com/images/t6jF5Iha8AXD1JhXzYg7mLGLo.png?scale-down-to=2048",
    date: "DEC 5, 2024",
    categories: ["TIPS"],
    author: { name: "RYAN MILFORD", avatar: "/images/ryan.jpg" },
    title: `Tiny but Mighty: 7 Genius Design Hacks for Compact Living`,
  },
  {
    id: 5,
    image:
      "https://framerusercontent.com/images/t6jF5Iha8AXD1JhXzYg7mLGLo.png?scale-down-to=2048",
    date: "DEC 5, 2024",
    categories: ["TIPS"],
    author: { name: "RYAN MILFORD", avatar: "/images/ryan.jpg" },
    title: `From Chaos to Cozy: Tips to Turn Your Cramped Space into a Stylish Sanctuary`,
  },
  {
    id: 6,
    image:
      "https://framerusercontent.com/images/5bchTkoNu02pNVTPU87gLYTDyic.pngg",
    date: "SEP 24, 2024",
    categories: ["INDUSTRY INSIGHTS"],
    author: { name: "JAMES MILLER", avatar: "/images/james.jpg" },
    title: `Skyline Trends: How Skyscrapers Are Redefining Urban Workspaces`,
  },
  {
    id: 7,
    image:
      "https://framerusercontent.com/images/jYW9wJIJ6gCfJ3QugzwOC71R71s.png",
    date: "DEC 5, 2024",
    categories: ["INDUSTRY INSIGHTS"],
    author: { name: "JAMES MILLER", avatar: "/images/james.jpg" },
    title: `Retail Spaces Reimagined: The Art of Creating Memorable Shopping Experiences`,
  },
  {
    id: 8,
    image:
      "https://framerusercontent.com/images/t6jF5Iha8AXD1JhXzYg7mLGLo.png?scale-down-to=2048",
    date: "JUL 5, 2024",
    categories: ["INDUSTRY INSIGHTS"],
    author: { name: "JAMES MILLER", avatar: "/images/james.jpg" },
    title: `The Future of Office Design: Trends Shaping Workspaces of Tomorrow`,
  },
];

export default function Articles() {
  const [position, setPosition] = useState({ x: 0, y: 0, showButton: false });

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      showButton: true,
    });
  };

  const handleMouseLeave = () => {
    setPosition((prev) => ({ ...prev, showButton: false }));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[120rem] mx-auto gap-x-4 sm:gap-x-6 gap-y-4 px-4 sm:px-6 py-2">
      {articles.map((article) => (
        <Card
          key={article.id}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "group relative overflow-hidden border-none shadow-none bg-transparent gap-0 cursor-pointer",
            position.showButton ? "cursor-pointer" : ""
          )}
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src={article.image}
              alt={article.title}
              className="rounded-sm w-full object-cover aspect-[4/3] transition-transform duration-700 ease-in-out group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {position.showButton && (
            <div
              className="absolute z-20 overflow-hidden"
              style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <button className="min-w-[max-content] bg-orange-500 text-black px-3 py-2 font-bold rounded-md flex items-center gap-2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75 text-sm sm:text-base">
                <div className="flex items-center gap-2 overflow-hidden">
                  <p className="whitespace-nowrap animate-[widthGrow_0.7s_ease-in-out_forwards] text-gray-800">
                    Read Blog
                  </p>
                  <CornerDownRight className="mt-0.5 sm:mt-1 w-3 h-3 sm:w-4 sm:h-4 animate-[widthGrow_0.3s_ease-in-out_forwards]" />
                </div>
              </button>
            </div>
          )}

          <CardContent className="p-0">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs my-3 sm:my-4 text-muted-foreground">
              <Badge
                className="bg-[#F7F2E9] rounded-xs text-[#787571] font-bold py-0.5 sm:py-1 text-[11px] sm:text-xs"
                variant="secondary"
              >
                {article.date}
              </Badge>
              {article.categories.map((cat, i) => (
                <Badge
                  className="bg-[#F7F2E9] text-[#787571] rounded-xs font-bold py-0.5 sm:py-1 text-[11px] sm:text-xs"
                  variant="outline"
                  key={i}
                >
                  {cat}
                </Badge>
              ))}
              <div className="bg-[#F7F2E9] border flex items-center gap-1 px-1">
                <Avatar className="h-4 w-4 sm:h-5 sm:w-5">
                  <AvatarImage
                    src={
                      "https://framerusercontent.com/images/EFEYJ7UhsUgYRBB9ykrqvfyoyA.jpg"
                    }
                  />
                  <AvatarFallback>
                    {article.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-[#787571] text-[11px] sm:text-[12px] font-bold py-0.5 sm:py-1">
                  {article.author.name}
                </span>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold leading-snug mt-2 sm:mt-3">
              {article.title}
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
