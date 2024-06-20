"use client";
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

  return (
    <>
      <h2 className="mb-4 p-0 leading-[1.2] text-2xl">Mina deals</h2>
      <form id="form2" name="form2" method="post" action="">
        <input type="hidden" name="action" value="delete" />

        <div className="w-full flex flex-col py-2 px-2 overflow-auto rounded-xl relative bg-white">
          <table className="w-full">
            <thead className="text-sm lg:text-base tabel_head_003">
              <tr className="brd">
                <th className="table_title_text_003 w-20">
                  <input
                    type="checkbox"
                    name="selectAll"
                    onClick={checkAll}
                    className="checkbox_table_003"
                  />{" "}
                  Alla
                </th>
                <th className="table_title_text_003">Titel / ID</th>
                <th className="table_title_text_003">Pris</th>
                <th className="table_title_text_003">Datum tillagt</th>
                <th className="table_title_text_003"></th>
                <th className="table_title_text_003"></th>
                <th className="table_title_text_003"></th>
              </tr>
            </thead>
          </table>

          <div className="flex items-center justify-center py-20">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG path data */}
              {/* ... */}
            </svg>
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
        <input
          type="submit"
          className="active-buton-transition submit mt-6 text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md focus:outline-none bg-heading text-white px-5"
          name="GoDelete"
          id="GoDelete"
          value="Radera utvalda"
          style={{
            height: "38px",
            borderRadius: "8px",
            background: "rgb(3, 103, 221)",
            fontFamily: "Nunito Sans",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "19px",
            color: "rgb(255, 255, 255)",
          }}
        />
      </form>
    </>
  );
}
