import React, { Suspense } from "react";
import Main_Discussion_card from "../common/Main_Discussion_card";

import Comments_Card from "../common/Comments_Card";
import dynamic from "next/dynamic";
import Loader from "@/lib/shared/Loader";

const Discussion_Comment_Section_Structure = ({ details }: any | undefined) => {
  const Editor = dynamic(() => import("@/lib/shared/Tiptap_Editor"), {
    ssr: false,
    loading: () => <Loader />,
  });
  return (
    <section className="flex flex-col gap-6">
      <Main_Discussion_card details={details} />

      <div className="min-h-64">
        <Editor />
      </div>
      <Comments_Card />
    </section>
  );
};

export default Discussion_Comment_Section_Structure;
