"use client";
import { useState } from "react";
import Image from "next/image";
import cn from "@/shared/lib/cn";

interface PostCarouselProps {
  images: string[];
}

const PostCarousel = ({ images }: PostCarouselProps) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative aspect-square overflow-hidden">
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="relative flex-[0_0_100%]">
            <Image src={src} alt={`slide-${i}`} fill className="object-cover" />
          </div>
        ))}
      </div>
      <div>
        <ol className="align-center absolute right-0 bottom-0 left-0 flex justify-center gap-[0.5rem] py-[24px]">
          {images.map((_, i) => (
            <li key={i}>
              <button
                onClick={() => setIndex(i)}
                type="button"
                aria-label={`Carousel indicator ${i + 1}`}
                className={cn(
                  "h-[6px] w-[6px] cursor-pointer rounded-full bg-[#ffffff33]",
                  index === i ? "bg-white" : "bg-white/30",
                )}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default PostCarousel;
