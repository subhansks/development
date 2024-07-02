"use client";
import Blockquote from "@tiptap/extension-blockquote";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import HardBreak from "@tiptap/extension-hard-break";

import { EditorContent, useEditor } from "@tiptap/react";
import React, { useEffect, useState } from "react";

import { Image as ImageIcon, Link as LinkIcon, Quote } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import { UploadImage } from "./React_DropZone";

const Emojis = [
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "🤣",
  "😂",
  "😫",
  "🥰",
  "😍",
  "🤩",
  "😋",
  "😜",
  "🤑",
  "🤐",
  "🤮",
  "🥵",
  "😡",
  "💩",
  "🤡",
];

interface urlType {
  url_Link: string;
  url_Text: string;
}

const Tiptap = () => {
  const [image, setImage] = useState<any | string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<urlType>({ url_Link: "", url_Text: "" });

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Blockquote,
      Link.configure({
        openOnClick: false,
        autolink: true,
        protocols: ["http", "https", "mailto", "tel"],
      }),
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: "editor-image",
        },
      }),
      HardBreak,
    ],
  });

  const addImage = () => {
    if (image) {
      editor
        ?.chain()
        .focus()
        .setImage({ src: image[0]?.data_url || image })
        .run();
      setTimeout(() => {
        editor?.chain().focus().enter().run();
        const { state }: null | any = editor;
        const { from } = state.selection;
        const newPos = from + 1;
        editor?.commands.setTextSelection(newPos);
      }, 500);
    }
  };

  const addLink = () => {
    const link = `<a ${`class="hover:underline  text-dealguru-blue cursor-pointer" `}  href=${
      url.url_Link
    }>${url.url_Text}</a>${" "}`;
    console.log(link);
    if (url) {
      editor?.commands.insertContent(link);
      editor?.chain().focus().run();
    }
  };

  if (!editor) {
    return null;
  }
  console.log(editor.getHTML());
  return (
    <>
      <div className=" min-h-64 shadow-md rounded-lg">
        <EditorContent
          id="editor"
          className="min-h-64 editor p-4 bg-dealguru-white overflow-scroll no-scrollbar  rounded-t-lg "
          editor={editor}
        />
        <div className="flex justify-start items-center  gap-2 h-fit   ">
          <div className="flex bg-dealguru-white gap-2 px-4 py-2 border-t border-t-gray-300 rounded-b-lg w-full">
            <button
              className="w-fit p-2 h-full min-w-11 min-h-11 rounded-md flex justify-center items-center border border-slate-600  "
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              // className={editor.isActive("blockquote") ? "is-active" : ""}
            >
              <Quote width={24} height={24} />
            </button>

            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="w-fit h-full min-w-11 min-h-11 p-2 rounded-md  flex justify-center items-center border border-slate-600  ">
                  😀
                </MenubarTrigger>
                <MenubarContent className=" before:bg-slate-900 bg-dealguru-white p-2 shadow-2xl border-gray-300 border rounded-md mt-1 mb-1">
                  <div className="p-2 h-[200px] flex flex-col gap-4 ">
                    <div>
                      <p className="font-bold text-lg">Select Emoji</p>
                    </div>
                    <div className=" grid grid-cols-4 h-[80%] overflow-y-scroll  mt-1 gap-4 pr-2">
                      {Emojis.map((d) => (
                        <p
                          className="w-fit cursor-pointer"
                          onClick={() =>
                            editor.chain().focus().insertContent(d).run()
                          }
                        >
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            {/* </button> */}

            {/* <button id=""> */}
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="w-fit h-full min-w-11 min-h-11  rounded-md p-2  flex justify-center items-center border border-slate-600  ">
                  <ImageIcon width={24} height={24} />
                </MenubarTrigger>
                <MenubarContent className="bg-dealguru-white p-2 w-[400px] shadow-2xl border-gray-300 border rounded-md mt-1 mb-1">
                  <div className="p-2 h-fit min-w-full  flex flex-col gap-4 ">
                    <div className="flex gap-2 items-center">
                      <ImageIcon width={18} height={18} />
                      <p className="font-bold text-lg"> Insert image</p>
                    </div>
                    <div className="  h-fit w-full   overflow-scroll no-scrollbar mt-1 flex flex-col gap-4">
                      <div className=" flex w-full justify-center ">
                        <UploadImage
                          setImageData={setImage}
                          imageData={image}
                        />
                      </div>
                      <div className="flex flex-col  gap-2 mt-8">
                        <p className="font-bold text-sm text-gray-500">
                          {" "}
                          Image from URL
                        </p>
                        <input
                          type="url"
                          onChange={(e) => {
                            if (url.url_Text === "") setImage(e.target.value);
                            if (image !== "") {
                              setImage("");
                              setImage(e.target.value);
                              console.log(e.target.value);
                            }
                          }}
                          className="w-full border focus-visible:border-red-300 border-zinc-700 rounded-md p-2"
                        />
                      </div>
                      <div>
                        <button
                          onClick={addImage}
                          className="w-full font-semibold font-open_sans text-dealguru-white text-sm bg-dealguru-blue  border-dealguru-blue hover:text-dealguru-blue hover:bg-dealguru-white   border rounded-md p-2 transition-all"
                        >
                          Add Image
                        </button>
                      </div>
                    </div>
                  </div>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            {/* Link */}
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger className="w-fit  rounded-md p-2  h-full min-w-11 min-h-11 flex justify-center items-center border border-slate-600  ">
                  <LinkIcon width={18} height={18} />
                </MenubarTrigger>
                <MenubarContent className="bg-dealguru-white p-2 w-[400px] shadow-2xl border-gray-300 border rounded-md mt-1 mb-1">
                  <div className="p-2 h-fit min-w-full  flex flex-col gap-4 ">
                    <div className="flex gap-2 items-center">
                      <LinkIcon width={18} height={18} />

                      <p className="font-bold text-lg"> Link</p>
                    </div>

                    <div className="  h-fit w-full   overflow-scroll no-scrollbar mt-1 flex flex-col gap-4">
                      <div className="flex flex-col  gap-2 ">
                        <p className="font-bold text-sm text-gray-500"> URL</p>
                        <input
                          type="url"
                          onChange={(e) => {
                            if (url.url_Link === "") {
                              setUrl({
                                url_Link: e.target.value,
                                url_Text: url.url_Text,
                              });
                            }
                            if (url.url_Link !== "") {
                              setUrl({
                                url_Link: "",
                                url_Text: url.url_Text,
                              });
                              setUrl({
                                url_Link: e.target.value,
                                url_Text: url.url_Text,
                              });
                              console.log(e.target.value);
                            }
                          }}
                          className="w-full border focus-visible:border-red-300 border-zinc-700 rounded-md p-2"
                        />
                      </div>
                      <div className="flex flex-col  gap-2 ">
                        <p className="font-bold text-sm text-gray-500"> Text</p>
                        <input
                          type="text"
                          onChange={(e) => {
                            if (url.url_Text === "") {
                              setUrl({
                                url_Link: url.url_Link,
                                url_Text: e.target.value,
                              });
                            }
                            if (url.url_Text !== "") {
                              setUrl({
                                url_Link: url.url_Link,
                                url_Text: "",
                              });
                              setUrl({
                                url_Link: url.url_Link,
                                url_Text: e.target.value,
                              });
                              console.log(e.target.value);
                            }
                          }}
                          className="w-full border focus-visible:border-red-300 border-zinc-700 rounded-md p-2"
                        />
                      </div>
                      <div>
                        <button
                          onClick={addLink}
                          type="submit"
                          className="w-full font-semibold font-open_sans text-dealguru-white text-sm bg-dealguru-blue  border-dealguru-blue hover:text-dealguru-blue hover:bg-dealguru-white   border rounded-md p-2 transition-all"
                        >
                          Add Link
                        </button>
                      </div>
                    </div>
                  </div>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            {/* </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tiptap;
