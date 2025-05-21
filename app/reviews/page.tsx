"use client";
import { MessagesSquare, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

interface AuthorProps {
  authorImage?: string;
  authName: string;
  authorRole: string;
}

export interface ReviewCardProps {
  imageUrl?: string;
  videoUrl?: string;
  reviewText?: string;
  reviewTitle?: string;
  reviewedFrom?: string;
  author?: AuthorProps;
}

const ReviewCardData = [
  [
    {
      imageUrl:
        "https://framerusercontent.com/images/NVoqwIxYHlWIv5lB9AHNyJEHNQY.png",
      reviewText:
        "When I first walked into my new bakery, I was speechless. The design team turned my vague dream into a reality that’s better than anything I imagined. From the rustic charm of the woodwork to the natural light streaming through the thoughtfully placed windows, every detail is perfection. I’ve had customers tell me they come back not just for the bread but for the warm, inviting atmosphere the space creates.",
      reviewTitle: "...better than anything I imagined....",
      reviewedFrom: "Google Review",
      author: {
        authorImage:
          "https://framerusercontent.com/images/av1QC6j9JKqHwxIdiUEol7OCdkA.jpg",
        authName: "Oliver Dempsey",
        authorRole: "Artisan Baker from Portland",
      },
    },
    {
      imageUrl:
        "https://framerusercontent.com/images/lnxcVcW2ZAXOVrfFLrpdshZkg.png",
      reviewText:
        "The team didn’t just build a café for me; they crafted a community hub. From the exposed brick walls that scream Brooklyn charm to the layout that encourages mingling, it’s everything I envisioned and more. Customers often comment on how cozy yet modern the space feels, and that’s entirely thanks to the genius design work. If I had to sum it up, I’d say they don’t just create spaces—they create experiences!",
      reviewTitle: "...they crafted a community hub...",
      reviewedFrom: "Live Review",
      author: {
        authName: "Wyatt Kingsley",
        authorRole: "Coffee Roaster from Brooklyn",
      },
    },
    {
      reviewText:
        "The retail store design completely transformed my business. The space is visually stunning, and it’s designed to guide customers effortlessly through every section. The layout has increased foot traffic and sales, and I’m thrilled to say my customers now stay longer and shop more. It’s a game-changer!",
      reviewTitle: "...my customers now stay longer and shop more...",
      reviewedFrom: "Google Review",
      author: {
        authName: "Levi Morgan",
        authorRole: "Retailer in Denver",
      },
    },
    {
      imageUrl: "https://i.ytimg.com/vi_webp/ay2e0VXtmfI/sddefault.webp",
      videoUrl:
        "https://www.youtube.com/embed/y0__MG9RdZY?iv_load_policy=3&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;autoplay=0&amp;color=white",
      author: {
        authName: "Levi Morgan",
        authorRole: "Retailer in Denver",
      },
    },
  ],
  [
    {
      imageUrl:
        "https://framerusercontent.com/images/jYW9wJIJ6gCfJ3QugzwOC71R71s.png",
      reviewText:
        "My studio is now my favorite place on Earth, thanks to these talented designers. They took my scattered ideas and turned them into a cohesive space where creativity flows effortlessly. The use of natural light is insane—I barely even need my artificial lights for shoots anymore",
      reviewTitle: "...they gave me a sanctuary...",
      reviewedFrom: "Facebook Review",
      author: {
        authName: "Silas Hoffman",
        authorRole: "Photographer in San Francisco",
      },
    },
    {
      imageUrl: "https://i.ytimg.com/vi_webp/ay2e0VXtmfI/sddefault.webp",
      videoUrl:
        "https://www.youtube.com/embed/ay2e0VXtmfI?iv_load_policy=3&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;autoplay=0&amp;color=white",
      author: {
        authName: "Monroe Silas",
        authorRole: "New York",
      },
    },
    {
      imageUrl:
        "https://framerusercontent.com/images/eQ5qtGxvLv67diHaAGJJwAeYY.png",
      reviewText:
        "I wanted a home that matched my personality: sleek, modern, and functional. These folks delivered that and more! My condo now feels like a tech haven with an elegant edge. The built-in smart home features, clean lines, and clever use of space blew me away.",
      reviewTitle: "...My condo now feels like a tech haven...",
      reviewedFrom: "Google Review",
      author: {
        authorImage:
          "https://framerusercontent.com/images/WibJvDexl2V7QNsNBntaEODZia4.jpg",
        authName: "Finn Gallagher",
        authorRole: "Software Developer in Austin",
      },
    },
    {
      reviewedFrom: "Google Review",
      reviewTitle: "...they redefined how education can happen...",
      reviewText:
        "Our school’s renovation was handled with such care and thoughtfulness. The team created classrooms and communal spaces that are bright, functional, and inspiring for students and teachers alike. The kids especially love the outdoor learning areas they designed. They didn’t just redesign our school; they redefined how education can happen.",
      author: {
        authName: "Rowan Blake",
        authorRole: "Educator in Seattle",
      },
    },
  ],
  [
    {
      imageUrl:
        "https://framerusercontent.com/images/RnwN2nxCdb2btj9P1RfjNOsF9o.png",
      reviewText:
        "The office space they designed for my startup is nothing short of amazing. It’s vibrant, collaborative, and inspiring—exactly the kind of environment where ideas come to life. Every detail, from the breakout areas to the ergonomic workstations, shows that they really understood what we needed.",
      reviewTitle: "...It’s vibrant, collaborative, and inspiring...",
      reviewedFrom: "Live Review",
      author: {
        authorImage:
          "https://framerusercontent.com/images/HdWbXwJUEXkxOiqujyNbrF0JJM.jpg",
        authName: "Caleb Sutton",
        authorRole: "Entrepreneur in Chicago",
      },
    },
    {
      imageUrl:
        "https://framerusercontent.com/images/dzcnUH2a76D6MDAM9feu1DOjYuA.png",
      reviewedFrom: "Google Review",
      reviewText:
        "I needed a hotel design that felt luxurious but still approachable, and they absolutely nailed it. Each room has its own personality while maintaining an overall theme of coastal elegance. Guests constantly rave about how the space feels like a slice of paradise, and bookings have skyrocketed since the redesign. This team didn’t just create a hotel—they created an experience that guests will remember forever.",
      reviewTitle: "...the space feels like a slice of paradise...",
      author: {
        authorImage:
          "https://framerusercontent.com/images/H8M8jsYOxH0mI2AipDXmdFsO3ec.jpg?scale-down-to=512",
        authName: "Monroe Silas",
        authorRole: "New York",
      },
    },
    {
      imageUrl: "https://i.ytimg.com/vi_webp/ay2e0VXtmfI/sddefault.webp",
      videoUrl:
        "https://www.youtube.com/embed/KY_ESjGm6ow?iv_load_policy=3&amp;rel=0&amp;modestbranding=1&amp;playsinline=1&amp;autoplay=0&amp;color=white",
      author: {
        authName: "Hoffman F.",
        authorRole: "Owner, Miami Resort",
      },
    },
    {
      reviewedFrom: "Google Review",
      reviewTitle: "...they come for the vibe....",
      reviewText:
        "I wanted my restaurant to feel like an extension of myself—modern, inviting, and a little edgy. The design team captured that perfectly. From the moody lighting to the seamless blend of industrial and cozy touches, the space has become a local favorite. Customers don’t just come for the food; they come for the vibe.",
      author: {
        authName: "Theo Hartman",
        authorRole: "Restaurateur in Dallas",
      },
    },
  ],
];

export const ReviewCard: React.FC<ReviewCardProps> = ({
  imageUrl,
  videoUrl,
  reviewText,
  reviewTitle,
  reviewedFrom,
  author,
}) => {
  const [play, setPlay] = useState(false);
  const isVideoCard = videoUrl && videoUrl.includes("youtube.com");

  return (
    <Card className="bg-[#F7F2E9] flex flex-col h-full overflow-hidden rounded-lg sm:rounded-lg shadow-md p-0 gap-2">
      {isVideoCard && videoUrl && (
        <div className="relative w-full aspect-video rounded-t-lg overflow-hidden cursor-pointer">
          {play ? (
            <iframe
              src={`${videoUrl}?autoplay=1&mute=1`}
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${imageUrl}')` }}
              onClick={() => setPlay(true)}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <svg
                  viewBox="0 0 68 48"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 sm:w-16 sm:h-16 transition-all duration-100"
                >
                  <path
                    d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0.13,34,0,34,0S12.21,0.13,6.9,1.55
                   C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26
                   c0.78,2.93,2.49,5.41,5.42,6.19C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55
                   c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                    fill="#212121"
                    fillOpacity="0.8"
                    className="transition-all duration-200 hover:fill-black"
                  />
                  <path d="M45,24 L27,14 L27,34 Z" fill="#fff" />
                </svg>
              </div>
            </div>
          )}
        </div>
      )}

      {imageUrl && !isVideoCard && (
        <div className="relative w-full flex h-[min-content] justify-center overflow-hidden">
          <div className="flex-grow h-auto relative w-full">
            <div className="flex place-content-center place-items-center w-full h-full p-0">
              <img
                src={imageUrl}
                alt="image"
                className="w-full h-auto object-cover rounded-t-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      <div className="px-3 xl:px-6">
        <CardHeader className="p-0 gap-0 my-3">
          {reviewedFrom && (
            <p className="text-base sm:text-lg text-[#3E3D37] mb-1">
              {reviewedFrom}
            </p>
          )}

          <div className="flex justify-center items-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 fill-orange-500"
                />
              ))}
            </div>
          </div>

          {reviewTitle && (
            <CardTitle className="text-xl xl:text-2xl text-[#21201B] my-2 mt-4 font-semibold leading-tight">
              {reviewTitle}
            </CardTitle>
          )}
        </CardHeader>

        {reviewText && (
          <CardContent className="flex-grow text-base xl:text-lg p-2 pb-5 text-[#21201B] leading-snug border-b border-gray-400">
            {reviewText}
          </CardContent>
        )}

        {author && (
          <CardFooter className="flex flex-col items-center p-2 sm:p-4 mt-auto">
            {author.authorImage && (
              <Avatar className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border border-gray-600 p-1 my-2 sm:my-3">
                <AvatarImage
                  src={author.authorImage}
                  alt={author.authName}
                  className="rounded-lg"
                />
                <AvatarFallback>{author.authName.charAt(0)}</AvatarFallback>
              </Avatar>
            )}
            <div className="text-center">
              <p className="text-base sm:text-lg text-[#2C2B26] font-medium">
                {author.authName}
              </p>
              <p className="text-sm sm:text-md text-[#706E67] font-semibold">
                {author.authorRole}
              </p>
            </div>
          </CardFooter>
        )}
      </div>
    </Card>
  );
};

export default function Reviews() {
  return (
    <section className="bg-[#FFFBF5]">
      <div className="max-w-[120rem] mx-auto pt-16 md:pt-25 flex flex-col items-center justify-center px-4 sm:px-6 text-center">
        <Card className="bg-[#F7F2E9] rounded-sm p-2 sm:p-3 flex flex-row justify-center items-center gap-2 max-w-xs">
          <MessagesSquare className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm font-Inter font-semibold text-[#41403F] uppercase">
            Testimonials
          </span>
        </Card>

        <h1 className="mt-3 sm:mt-4 mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl max-w-3xl font-semibold text-[#1B1B17] leading-snug sm:leading-tight px-2">
          Our greatest achievements aren’t just our projects—they’re the
          relationships and trust we’ve built along the way.
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mt-10">
          {ReviewCardData.map((section, index) => (
            <div
              className="flex-1 flex flex-col gap-4"
              key={`section-${index}`}
            >
              {section.map((review, index) => (
                <ReviewCard
                  key={`data-${index}`}
                  imageUrl={review.imageUrl}
                  videoUrl={review.videoUrl}
                  reviewText={review.reviewText}
                  reviewTitle={review.reviewTitle}
                  reviewedFrom={review.reviewedFrom}
                  author={review.author}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
