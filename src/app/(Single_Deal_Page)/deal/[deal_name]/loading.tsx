import BlueSpinner from "@/lib/shared/LoadingAnimations/BlueSpinner";
import React from "react";

const loading = () => {
  return (
    <div className="mt-32 w-full flex justify-center min-h-screen">
      <BlueSpinner />
    </div>
  );
};

export default loading;
