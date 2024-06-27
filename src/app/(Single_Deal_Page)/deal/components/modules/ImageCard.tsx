import React from "react";

const ImageCard = () => {
  return (
    <div className="bg-dealguru-white shadow-md shadow-gray-200 min-h-96 rounded-lg">
      <div className="flex flex-col items-end justify-end h-full p-4">
        <div></div>
        <button className="text-dealguru-white bg-dealguru-blue rounded-lg w-full p-3 hover:bg-dealguru-white font-open_sans transition-all border border-dealguru-white font-semibold hover:text-dealguru-blue hover:border hover:border-dealguru-blue">
          Gå direkt till dealen
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
