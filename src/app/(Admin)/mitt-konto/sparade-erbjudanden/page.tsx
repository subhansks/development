"use client";
import Image from "next/image";
import React from "react";

export default function ProfilePage() {
  const checkAll = () => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      ".checkbox_table_003"
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = !checkbox.checked;
    });
  };

  const handleSubmit = () => {
    const form = document.querySelector<HTMLFormElement>("#form2");
    if (form) {
      form.submit();
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="mb-4 p-0 leading-[1.2] text-2xl whitespace-nowrap">
          Sparade erbjudanden
        </h2>
        <div className="w-full flex justify-end mb-2">
          <button
            onClick={handleSubmit}
            className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 rounded-[8px] focus:outline-none bg-[#0367DD] text-white px-5 h-[38px] font-nunito"
            id="GoDelete"
          >
            Skapa erbjudande
          </button>
        </div>
      </div>

      <form id="form2" name="form2" method="post" action="">
        <input type="hidden" name="action" value="delete" />

        <div className="w-full flex flex-col py-2 px-2 overflow-auto rounded-xl bg-white">
          <table className="w-full">
            <thead className="w-full rounded-xl bg-dealguru-grey h-14">
              <tr className="rounded-xl text-gray-500 font-normal">
                <th className="w-20 rounded-l-xl font-normal">
                  <input
                    type="checkbox"
                    name="selectAll"
                    onClick={checkAll}
                    className=""
                  />
                  Alla
                </th>
                <th className="table_title_text_003 font-normal">Titel / ID</th>
                <th className="table_title_text_003 font-normal">Pris</th>
                <th className="table_title_text_003 font-normal rounded-r-xl">
                  Datum tillagt
                </th>
              </tr>
            </thead>
          </table>

          <div className="flex items-center justify-center py-20">
            <Image
              src="/assets/svg/profile/box.svg"
              alt="Postade deals icon"
              width={100}
              height={100}
              loading="lazy"
            />
            <div className="px-4">
              <p className="Whoops_deal_head_003 text-[21px] font-normal leading-[29px] text-[#1B2738]">
                Hoppsan!
              </p>
              <span className="nope_deal_txt_003 text-[14px] font-normal leading-[19px] text-[#1B2738]">
                Det verkar som du inte har några erbjudanden ännu...
              </span>
            </div>
          </div>
        </div>

        <input type="hidden" name="action" value="delete" />
      </form>
    </>
  );
}
