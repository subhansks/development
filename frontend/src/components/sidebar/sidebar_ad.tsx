import Image from "next/image";
import Link from "next/link";
import React from "react";

const Ad_Section = () => {
  return (
    <div className="">
      <div className="   w-full ">
        <div className=" justify-start items-start">
          {/* Card Image */}
          <Link href={"#"}>
            <Image
              src="/assets/images/ad.jpg"
              width={300}
              height={400}
              alt=""
              className=" w-full h-full rounded-xl "
            />
          </Link>
        </div>
        <hr className="mx-3 last_child_hr border-dealguru-grey" />
      </div>
    </div>
  );
};

export default Ad_Section;
