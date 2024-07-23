import React, { useState } from "react";
import ImageUploading from "react-images-uploading";

export function UploadImage({ setImageData, imageData }: any) {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList: any) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList);
    if (imageData === "") setImageData(imageList);
    if (imageData !== "") {
      setImageData("");
      setImageData(imageList);
    }

    // console.log(imageList);
  };

  return (
    <div className="flex flex-col gap-4  h-[120px] w-full">
      {/* <p className="font-medium text-lg">Drop Your Image Here</p> */}
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className=" flex flex-col relative items-end w-full h-full">
            <button
              className="border border-zinc-700 w-full h-full rounded-md text-zinc-600 font-medium text-base"
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            {/* <button
              onClick={onImageRemoveAll}
              className="bg-bg_color text-white p-2 rounded-md w-fit "
            >
              Remove all images
            </button> */}
            {imageList.map((image, index) => (
              <div key={index} className=" absolute left-0 py-2 w-full h-full">
                <div className="flex justify-center w-full h-[80%] ">
                  <img
                    src={image["data_url"]}
                    alt=""
                    width="100"
                    className=" rounded-md h-full w-auto object-scale-down"
                  />
                </div>
                <div className="mt-4 flex gap-20 ">
                  <button
                    onClick={() => onImageUpdate(index)}
                    className="px-4 py-2  bg-white text-sm border-zinc-700 text-black border  basis-1/2 rounded-lg font-semibold font-open_sans hover:bg-red-500 hover:border-zinc-700 hover:border hover:text-white transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onImageRemove(index)}
                    className="px-4 py-2  bg-white text-sm text-black border border-zinc-700 basis-1/2 rounded-lg font-semibold font-open_sans hover:bg-red-500 hover:border-zinc-700 hover:border hover:text-white transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
