import { ArrowBigUp } from "lucide-react";
import Image from "next/image";
import React from "react";

/**
 * CommentSection component displays a comment section with an avatar, username,
 * comment text, and actions.
 * @returns {JSX.Element} The CommentSection component.
 */

const CommentSection = (): JSX.Element => {
  return (
    // Container for the comment section
    <div className="flex flex-col text-gray-500 ">
      <p className="my-3">Vad tycker du?</p>
      <div className="rounded-t-lg bg-dealguru-white p-4 flex gap-5 border border-gray-200">
        <Image
          width={40}
          height={40}
          src="/assets/images/blank_avatar_new.png"
          className="w-[40px] h-[40px] rounded-full"
          alt="Avatar"
        />
        <input
          className="h-full w-full border border-gray-200 rounded-full px-3 "
          placeholder="Skirv din kommentar har..."
        />
      </div>
      <div className="bg-dealguru-white lg:px-16 md:px-12 px-4 py-4 rounded-b-lg shadow-md shadow-gray-200">
        <div className="flex flex-col gap-3 sm:gap-4">
          {/* Avatar and username */}
          <div className="flex gap-3 sm:gap-4">
            <Image
              width={40}
              height={40}
              src="/assets/images/blank_avatar_new.png"
              className="w-[40px] h-[40px] rounded-full"
              alt="Avatar"
            />
            <p className="font-semibold text-xs flex items-center gap-1 overflow-hidden">
              Malin <span className=" p-[1px] bg-black"></span> {/* Username */}
              <span className=" font-normal text-xs text-gray-500 truncate">
                15 dagar, 2 timmar, 20 minuter sedan
              </span>
            </p>
          </div>
          {/* Comment text */}
          <div className="flex gap-3 sm:gap-4">
            <div className="min-w-10 flex justify-center">
              <div className="p-[1px] h-full bg-slate-200 w-fit" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-base font-normal">
                {/* Comment text */}
                2018 hade Åhléns halva priset på Swedish Grace Snö startset i 8
                delar. Jag slog till på 3 set så jag fick 6 av varje. Priset
                skulle ha landat på 2 241 kr. Men jag hade både en kod som gav
                20% rabatt vid köp för minst 500 kr + en medlemsbonus på 50 kr.
                Dessutom löste jag in en massa sparade gratis presentkort på
                1700 kr. Slutade med att jag betalade 43 kr 😅
              </p>
              {/* Actions */}
              <div className="flex gap-6">
                <div className="flex items-center gap-1">
                  <ArrowBigUp strokeWidth={0.5} />
                  <p className="font-light text-sm">0</p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    height={12}
                    width={16}
                    src={"/assets/svg/share.svg"}
                    alt=""
                  />
                  <p className="font-semibold text-sm flex items-center gap-1 text-gray-500">
                    Svara
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
