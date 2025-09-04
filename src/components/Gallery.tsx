"use client";

import Image from "next/image";
import { useState } from "react";

// Each Image's id must match it's index in the array.
type Image = {
  id: number;
  src: string;
  alt: string;
};

// Type Images[] must have at least one Image.
type Images = [Image, ...Image[]];

type GalleryProps = {
  images: Images;
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState<Image>(images[0]);

  const [isLeftArrowHovered, setIsLeftArrowHovered] = useState(false);

  const [isRightArrowHovered, setIsRightArrowHovered] = useState(false);

  const getNextImage = () => {
    const currentImageId = currentImage.id;

    // If the image is the last one, go back to first image.
    if (currentImageId === images.length - 1) {
      setCurrentImage(images[0]);
    }
    // Otherwise get next image at the next index.
    else {
      setCurrentImage(images[currentImageId + 1]);
    }
  };

  const getPreviousImage = () => {
    const currentImageId = currentImage.id;

    // If the image is the first one, go to the last image.
    if (currentImageId === 0) {
      setCurrentImage(images[images.length - 1]);
    }
    // Otherwise get the image at the previous index.
    else {
      setCurrentImage(images[currentImageId - 1]);
    }
  };

  const handleLeftArrowButtonMouseOver = () => setIsLeftArrowHovered(true);

  const handleLeftArrowButtonMouseOut = () => setIsLeftArrowHovered(false);

  const handleRightArrowButtonMouseOver = () => setIsRightArrowHovered(true);

  const handleRightArrowButtonMouseOut = () => setIsRightArrowHovered(false);

  return (
    <div className="flex-col gap-5 hidden sm:flex">
      <h2 className="text-2xl font-semibold">Gallery</h2>

      <div className="flex">
        {images.length > 1 && (
          <button
            type="button"
            className="w-12 flex items-center justify-center hover:cursor-pointer"
            onMouseOver={handleLeftArrowButtonMouseOver}
            onMouseOut={handleLeftArrowButtonMouseOut}
            onClick={getPreviousImage}
            aria-label="Switch to previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill={(isLeftArrowHovered && "#16a34a") || "#fff"}
            >
              <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
          </button>
        )}

        <div className="flex flex-auto justify-center h-[400px] lg:h-[600px] relative">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-full object-contain"
            fill
            priority={currentImage.id === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {images.length > 1 && (
          <button
            type="button"
            className="w-12 flex items-center justify-center hover:cursor-pointer"
            onMouseOver={handleRightArrowButtonMouseOver}
            onMouseOut={handleRightArrowButtonMouseOut}
            onClick={getNextImage}
            aria-label="Switch to next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill={(isRightArrowHovered && "#16a34a") || "#fff"}
            >
              <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
            </svg>
          </button>
        )}
      </div>

      <p className="text-center dark:text-white text-black">
        {currentImage.id + 1} / {images.length}
      </p>
    </div>
  );
};

export default Gallery;
