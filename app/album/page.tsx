"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Image } from "lucide-react";
import { useRef, useState } from "react";

const images: string[] = [
  "https://framerusercontent.com/images/dQftKBNEoyGZl6BDjcGbHv6KYg.webp",
  "https://framerusercontent.com/images/cKdwx0TQxw7MKiUKihFL5Qif0M.webp",
  "https://framerusercontent.com/images/ymHgY1HA6zFqffYsTWTLGhwFDE.webp",
  "https://framerusercontent.com/images/52byqNtSxRbm8zsP7HCFXNnG1pg.webp",
  "https://framerusercontent.com/images/1UJtNn6mfPBZop7tAmKajMgSf0.png",
  "https://framerusercontent.com/images/kHdNIpsTdurehv9wVtAF250fwE.webp",
  "https://framerusercontent.com/images/dQftKBNEoyGZl6BDjcGbHv6KYg.webp",
  "https://framerusercontent.com/images/xbwRPxHMsVhX9Gse4yisTBolkjM.webp",
  "https://framerusercontent.com/images/28JPWa7K4smsQTRxeG9AwpZzl8.webp",
  "https://framerusercontent.com/images/28JPWa7K4smsQTRxeG9AwpZzl8.webp",
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleImage = (index: number) => {
    setSelectedImage(index);
    const imageElement =
      galleryRef.current && galleryRef.current.children[index];

    imageElement?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  };

  return (
    <div className="mt-6 lg:mt-10 relative bg-[#FFFBF5] px-0 lg:px-6 py-6 sm:py-10">
      <div className="relative max-w-3xl mx-auto flex flex-col items-center">
        <div
          ref={galleryRef}
          className="w-full space-y-4 sm:space-y-6 mb-20 sm:mb-32"
        >
          {images.map((img, index) => (
            <div
              key={index}
              id={`image-${index}`}
              className="rounded-lg sm:rounded-xl w-full overflow-hidden"
            >
              <img
                src={img}
                alt={`Villa ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="fixed bottom-2 left-0 right-0 flex justify-center">
          <div className="flex overflow-x-auto gap-2 sm:gap-3 px-3 sm:px-4 py-1 sm:py-2 backdrop-blur-lg rounded-lg shadow-lg max-w-full sm:max-w-7xl mx-2 sm:mx-auto">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => handleImage(index)}
                className={cn(
                  "border-2 overflow-hidden w-12 h-12 sm:w-16 sm:h-16 min-w-[3rem] sm:min-w-[4rem] flex-shrink-0 cursor-pointer transition-all duration-300",
                  selectedImage === index
                    ? "rounded-full scale-110 sm:scale-110"
                    : "rounded-md border-transparent hover:scale-105"
                )}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  src={img}
                  alt={`Villa thumbnail ${index + 1}`}
                  className="object-cover w-full h-full hover:scale-175 transition-all duration-300"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Album = () => {
  return (
    <section className="bg-[#FFFBF5] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-10">
      <div className="mt-6 sm:mt-8 md:mt-10 max-w-8xl mx-auto flex flex-col lg:flex-row justify-between gap-2 sm:gap-6 lg:gap-10 items-start">
        <div className="w-full md:w-auto">
          <Card className="bg-[#F7F2E9] rounded-sm p-2 my-2 sm:my-3 flex flex-row justify-center items-center gap-2 w-max max-w-full">
            <Image className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-Inter font-semibold text-[#41403F] uppercase">
              Album
            </span>
          </Card>

          <h1 className="font-Inter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight sm:leading-snug md:leading-[1] text-[#1D1D1D]">
            Dreamy <br className="hidden sm:block" /> Modern Villas
          </h1>
        </div>

        <div className="text-[#21201B] lg:self-end font-Inter text-base sm:text-lg md:text-xl lg:text-2xl leading-snug max-w-full sm:max-w-md md:max-w-lg mt-4 sm:mt-0">
          <p>
            Imagine waking up in a sunlit villa where every corner is designed
            for elegance and ease. These homes feature sleek architecture,
            expansive layouts, and thoughtful details that make luxury feel like
            a natural part of life. Whether it's hosting a garden party or
            relaxing poolside, these villas redefine what it means to live the
            good life.
          </p>
        </div>
      </div>

      <Gallery />
    </section>
  );
};

export default Album;
