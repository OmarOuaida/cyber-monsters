import React, { useState, useEffect } from "react";
import assetList from "../assetList.json";

const getRandomImage = (exclude) => {
  if (!assetList || assetList.length === 0) return "";
  if (assetList.length === 1) return assetList[0];

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
  const [showSecret, setShowSecret] = useState(false);

  const handleClick = (index) => {
    const updated = [...images];
    updated[index] = getRandomImage();
    setImages(updated);
  };

  useEffect(() => {
    const stillCount = images.filter((src) => src.includes("/stills")).length;
    if (stillCount >= 10 && !showSecret) {
      console.log("Secret unlocked!");
      setShowSecret(true);
    }
  }, [images, showSecret]);

  return (
    <div className="w-screen h-screen relative bg-white overflow-hidden">
      {/* 🔔 Challenge message */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 z-20 bg-blue-100 text-black px-4 py-2 rounded-full shadow-md text-sm font-semibold">
       Poke some monsters to reveal the hidden message
      </div>

      {/* 🧩 Grid of images */}
      <div className="grid grid-cols-5 grid-rows-2 gap-1 w-full h-[90vh] px-4 py-10">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-full cursor-pointer aspect-square  rounded-lg flex items-center justify-center"
            onClick={() => handleClick(index)}
          >
            <img
              src={src}
              alt={`Block ${index + 1}`}
              className="max-w-full max-h-full object-contain p-1"
            />
          </div>
        ))}
      </div>

      {/* 🎉 Secret Popup */}
      {showSecret && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl shadow-xl text-center max-w-sm">
            <h2 className="text-xl font-bold mb-2">👀 Secret Unlocked!</h2>
            <p className="text-sm">
              “In World War II, British spies hid secret messages in knitting patterns — and even embedded Morse code into scarf designs. Sometimes, the key to a code isn’t numbers or passwords… it’s patterns hiding in plain sight.”
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;