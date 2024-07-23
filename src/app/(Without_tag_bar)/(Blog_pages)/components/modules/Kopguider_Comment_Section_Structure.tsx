import React, { Suspense } from "react";
import Rich_Text_editor from "../common/Rich_Text_editor";
import Loader from "../common/Loader";
import Comments_Card from "../common/Comments_Card";
import dynamic from "next/dynamic";

const Kopguider_Comment_Section_Structure = ({ details }: any | undefined) => {
  const Editor = dynamic(
    () => import("@/lib/shared/Rich_Text_Editor/Tiptap_Editor"),
    {
      ssr: false,
      loading: () => <Loader />,
    }
  );
  return (
    <section className="flex flex-col gap-6">
      <Editor />
      <Comments_Card />
    </section>
  );
};

export default Kopguider_Comment_Section_Structure;
