import Image from "next/image";
import Link from "next/link";

function Img_group() {
  return (
    <>
      <Link
        href={"/"}
        className="min-w-32 h-20 p-2 flex items-center justify-center"
      >
        <Image
          width={100}
          height={0}
          className="h-auto  grayscale opacity-60 "
          alt="logos"
          src={"/logos/adidas.jpg"}
        />
      </Link>
      <Link
        href={"/"}
        className="min-w-32 h-20 p-2 flex items-center justify-center"
      >
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 "
          alt="logos"
          src={"/logos/Adlibris.png"}
        />
      </Link>
      <Link
        href={"/"}
        className="min-w-32 h-20 p-2 flex items-center justify-center"
      >
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 "
          alt="logos"
          src={"/logos/ahlens.png"}
        />
      </Link>
      <Link
        href={"/"}
        className="min-w-32 h-20 p-2 flex items-center justify-center"
      >
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 "
          alt="logos"
          src={"/logos/apotek.png"}
        />
      </Link>
      <Link
        href={"/"}
        className="min-w-32 h-20 p-2 flex items-center justify-center"
      >
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 "
          alt="logos"
          src={"/logos/apple.png"}
        />
      </Link>
      <Link
        href={"/"}
        className="min-w-32 h-20 p-2 flex items-center justify-center"
      >
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 "
          alt="logos"
          src={"/logos/xxl.jpg"}
        />
      </Link>
      <Link
        href={"/"}
        className="min-w-32 h-20 p-2 flex items-center justify-center"
      >
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 "
          alt="logos"
          src={"/logos/hotels.jpg"}
        />
      </Link>
      <Link
        href={"/"}
        className="min-w-32 h-20 p-2 flex items-center justify-center"
      >
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 "
          alt="logos"
          src={"/logos/Ikea.png"}
        />
      </Link>
      <Link
        href={"/"}
        className="min-w-32 h-20 p-2 flex items-center justify-center"
      >
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 "
          alt="logos"
          src={"/logos/Lindex.png"}
        />
      </Link>
    </>
  );
}

export default function LogoSlider() {
  return (
    <div className="overflow-hidden mt-10 mx-16  rounded-xl">
      <div className="flex  overflow-hidden bg-white  w-fit gap-4">
        <div className="flex marquee-animation w-fit gap-4">
          <div className="flex gap-4 justify-center">
            <Img_group />
          </div>
          <div className="flex gap-4 justify-center">
            <Img_group />
          </div>
          <div className="flex gap-4 justify-center">
            <Img_group />
          </div>
        </div>
        <div className="flex w-fit marquee-animation gap-4">
          <div className="flex gap-4 justify-center">
            <Img_group />
          </div>
          <div className="flex gap-4 justify-center">
            <Img_group />
          </div>
          <div className="flex gap-4 justify-center">
            <Img_group />
          </div>
        </div>
      </div>
    </div>
  );
}
