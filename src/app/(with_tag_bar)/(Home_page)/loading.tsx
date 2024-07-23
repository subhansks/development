import BlueSpinner from "@/lib/shared/LoadingAnimations/BlueSpinner";
import React from "react";

const loading = () => {
  return (
    <div className="w-full mx-auto mt-40  flex justify-center items-start min-h-screen">
      <BlueSpinner />
    </div>
  );
};

export default loading;
