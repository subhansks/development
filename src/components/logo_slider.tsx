import Image from "next/image";

function Img_group() {
  return (
    <>
      <div className="min-w-32 h-20 p-2 flex items-center">
        <Image
          width={100}
          height={0}
          className="h-auto  grayscale opacity-60 "
          alt="logos"
          src={"/logos/adidas.jpg"}
        />
      </div>
      <div className="min-w-32 h-20 p-2 flex items-center">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/Adlibris.png"}
        />
      </div>
      <div className="min-w-32 h-20 p-2 flex items-center">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/ahlens.png"}
        />
      </div>
      <div className="min-w-32 h-20 p-2 flex items-center">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/apotek.png"}
        />
      </div>
      <div className="min-w-32 h-20 p-2 flex items-center">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/apple.png"}
        />
      </div>
      <div className="min-w-32 h-20 p-2 flex items-center">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/xxl.jpg"}
        />
      </div>
      <div className="min-w-32 h-20 p-2 flex items-center">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/hotels.jpg"}
        />
      </div>
      <div className="min-w-32 h-20 p-2 flex items-center">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/Ikea.png"}
        />
      </div>
      <div className="min-w-32 h-20 p-2 flex items-center">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/Lindex.png"}
        />
      </div>
    </>
  );
}

export default function LogoSlider() {
  return (
    <div className="overflow-hidden mt-10 mx-16  rounded-xl">
      <div className="flex  overflow-hidden bg-white  w-fit gap-4">
        <div className="flex marquee-animation w-fit gap-4">
          <div className="flex gap-4">
            <Img_group />
          </div>
          <div className="flex gap-4">
            <Img_group />
          </div>
          <div className="flex gap-4">
            <Img_group />
          </div>
        </div>
        <div className="flex w-fit marquee-animation gap-4">
          <div className="flex gap-4">
            <Img_group />
          </div>
          <div className="flex gap-4">
            <Img_group />
          </div>
          <div className="flex gap-4">
            <Img_group />
          </div>
        </div>
      </div>
    </div>
  );
}
