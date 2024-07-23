import BlueSpinner from "@/lib/shared/LoadingAnimations/BlueSpinner";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="w-full mx-auto mt-14 flex justify-center">
        <BlueSpinner />
      </div>
    </>
  );
};

export default Loading;
