import React, { useState } from "react";
import assetList from "../assetList.json"; // Auto-generated

const getRandomImage = (exclude) => {
  if (assetList.length <= 1) return exclude;

  let newImage;
  do {
    const i = Math.floor(Math.random() * assetList.length);
    newImage = assetList[i];
  } while (newImage === exclude);

  return newImage;
};
const LoadingScreen = () => {
  const gridSize = 10;
  const [images, setImages] = useState(
    Array.from({ length: gridSize }, () => getRandomImage())
  );

  const handleClick = (index) => {
    const updated = [...images];
    updated[index] = getRandomImage();
    setImages(updated);
  };

  return (
    <div className="w-full h-full grid grid-cols-5 grid-rows-2 gap-2 p-2 bg-white">
      {images.map((src, index) => (
        <div
          key={index}
          className="w-full h-full cursor-pointer"
          onClick={() => handleClick(index)}
        >
          <img
            src={src}
            alt={`Block ${index + 1}`}
            className="w-full h-full object-contain p-1"
          />
        </div>
      ))}
    </div>
  );
};

export default LoadingScreen;