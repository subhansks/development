"use client";

import React from "react";
import Loader from "./Loader";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <Loader />,
});

const Rich_Text_editor = () => {
  const [editorContent, setEditorContent] = useState<string>("");
  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };
  return (
    <div className="flex flex-col gap-3 mt-8">
      <p className="text-gray-500 text-base mt-6 mb-4">Vad tycker du?</p>
      <ReactQuill
        className="bg-dealguru-white flex flex-col-reverse border-none shadow-md shadow-gray-200 rounded-lg border-white target_child "
        value={editorContent}
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default Rich_Text_editor;
