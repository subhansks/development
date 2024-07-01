import React, { Suspense } from "react";
import Rich_Text_editor from "../common/Rich_Text_editor";
import Loader from "../common/Loader";
import Comments_Card from "../common/Comments_Card";

const Kopguider_Comment_Section_Structure = ({ details }: any | undefined) => {
  return (
    <section className="flex flex-col gap-6">
      <Suspense fallback={<Loader />}>
        <Rich_Text_editor />
      </Suspense>
      <Comments_Card />
    </section>
  );
};

export default Kopguider_Comment_Section_Structure;
