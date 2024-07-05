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

import {
  Image as ImageIcon,
  Link as LinkIcon,
  Quote,
  SendHorizontal,
  Smile,
} from "lucide-react";
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
        inline: true,
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
        const { state }: null | any = editor;
        const { from } = state.selection;
        console.log(from);
        const newPos = from + 1;
        editor?.commands.setTextSelection(newPos);
        // editor?.chain().focus().enter().run();
      }, 200);
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
  // console.log(editor.getHTML());
  return (
    <>
      <div className=" min-h-36 shadow-md rounded-lg">
        <EditorContent
          id="editor"
          className="min-h-36 editor p-4 bg-dealguru-white overflow-scroll no-scrollbar  rounded-t-lg "
          editor={editor}
        />
        <div className="flex justify-start items-center  gap-2 h-fit   ">
          <div className="flex  gap-3 bg-dealguru-white justify-between px-4 py-2 border-t border-t-gray-300 rounded-b-lg w-full items-end">
            <div className="w-full flex gap-2 items-end">
              <button
                className="w-fit p-2 h-fit  min-w-8 min-h-8 rounded-md flex justify-center items-center   hover:bg-gray-200  transition-all duration-200"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                // className={editor.isActive("blockquote") ? "is-active" : ""}
                title="Indent"
              >
                <Quote width={18} height={18} color="#686D76" />
              </button>

              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger
                    className="w-fit h-fit min-w-8 min-h-8 hover:bg-gray-200  transition-all duration-200 p-2 rounded-md  flex justify-center items-center "
                    title="Emojis"
                  >
                    <Smile width={18} height={18} color="#686D76" />
                  </MenubarTrigger>
                  <MenubarContent className=" before:bg-slate-900 bg-dealguru-white p-2 shadow-2xl border-gray-300 border rounded-md mt-1 mb-1">
                    <div className="p-2 h-[200px] flex flex-col gap-4 ">
                      <div>
                        <p className="font-bold text-lg">Select Emoji</p>
                      </div>
                      <div className=" grid grid-cols-4 h-[80%] overflow-y-scroll  customize-scrollbar mt-1 gap-4 pr-2">
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
                  <MenubarTrigger
                    className="w-fit h-fit  min-w-8 min-h-8 hover:bg-gray-200  transition-all duration-200  rounded-md p-2  flex justify-center items-center "
                    title="Inset Image"
                  >
                    <ImageIcon width={18} height={18} color="#686D76" />
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
                  <MenubarTrigger
                    className="w-fit  rounded-md p-2  h-fit  min-w-8 min-h-8 hover:bg-gray-200  transition-all duration-200 flex justify-center items-center "
                    title="Link"
                  >
                    <LinkIcon width={18} height={18} color="#686D76" />
                  </MenubarTrigger>
                  <MenubarContent className="bg-dealguru-white p-2 w-[400px] shadow-2xl border-gray-300 border rounded-md mt-1 mb-1">
                    <div className="p-2 h-fit min-w-full  flex flex-col gap-4 ">
                      <div className="flex gap-2 items-center">
                        <LinkIcon width={18} height={18} />

                        <p className="font-bold text-lg"> Link</p>
                      </div>

                      <div className="  h-fit w-full   overflow-scroll no-scrollbar mt-1 flex flex-col gap-4">
                        <div className="flex flex-col  gap-2 ">
                          <p className="font-bold text-sm text-gray-500">
                            {" "}
                            URL
                          </p>
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
                          <p className="font-bold text-sm text-gray-500">
                            {" "}
                            Text
                          </p>
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
            </div>
            {/* </button> */}
            <button className="md:min-w-fit  flex gap-4 px-5  py-2 md:rounded-md justify-between items-center rounded-full border border-dealguru-black bg-dealguru-black text-dealguru-white font-open_sans font-semibold">
              <p className="md:block hidden text-sm">Kommentera</p>
              <SendHorizontal width={16} height={16} className="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tiptap;
