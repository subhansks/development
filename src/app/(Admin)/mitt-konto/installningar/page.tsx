"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ColorPicker from "@/components/common/ColorPicker";

// Validation schema using Yup
const validationSchema = Yup.object({
  generated_username: Yup.string(),
  fname: Yup.string().required("Förnamn is required"),
  lname: Yup.string().required("Efternamn is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("E-post is required"),
  phone: Yup.string().matches(/^[0-9]*$/, "Telefon must be a number"),
});

// Custom Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white p-6 rounded-lg w-full max-w-4xl overflow-y-auto max-h-[90vh] relative custom-scrollbar"
        ref={modalRef}
      >
        <button
          className="absolute top-2 right-2 text-2xl font-semibold text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ×
        </button>
        <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 12px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 6px;
            border: 3px solid #f1f1f1;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #555;
          }
        `}</style>
      </div>
    </div>
  );
};

// Tabs Component
interface TabProps {
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex overflow-x-auto border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 whitespace-nowrap focus:outline-none ${
              activeTab === index
                ? "border-b-2 border-blue-500 text-blue-500"
                : "border-b-2 border-transparent text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${activeTab === index ? "block" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

const ProfilePage = () => {
  const initialValues = {
    generated_username: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form Data:", values);
    // Replace the console log with an API call or any other action
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveModal = () => {
    console.log("Selected Avatar:", selectedAvatar);
    console.log("Selected Color:", selectedColor);
    handleCloseModal();
  };

  const tabs = [
    {
      label: "Choose your avatar",
      content: (
        <div className="avatar_selected_box">
          <div className="block mt-8 mb-5">
            <h3 className="text-lg font-semibold">Female</h3>
          </div>
          <div className="block mt-5 mb-5">
            <div className="swiper mySwiper_womens_slider">
              <div className="flex space-x-10">
                <div className="flex-shrink-0 w-48">
                  <input
                    type="radio"
                    name="avatar"
                    id="womens_avarate1121"
                    data-srcs-id="121"
                    onChange={() => setSelectedAvatar("121")}
                  />
                  <label htmlFor="womens_avarate1121">
                    <img
                      src="/assets/images/profile/womannew1.png"
                      className="w-20"
                    />
                  </label>
                </div>
                <div className="flex-shrink-0 w-48">
                  <input
                    type="radio"
                    name="avatar"
                    id="womens_avarate2122"
                    data-srcs-id="122"
                    onChange={() => setSelectedAvatar("122")}
                  />
                  <label htmlFor="womens_avarate2122">
                    <img
                      src="/assets/images/profile/womannew1.png"
                      className="w-20"
                    />
                  </label>
                </div>
                {/* Add more slides as needed */}
              </div>
            </div>
          </div>
          <div className="block mt-8 mb-5">
            <h3 className="text-lg font-semibold">Male</h3>
          </div>
          <div className="block mt-5 mb-5">
            <div className="swiper mySwiper_womens_slider2">
              <div className="flex space-x-10">
                <div className="flex-shrink-0 w-48">
                  <input
                    type="radio"
                    name="avatar"
                    id="mens_avatar1119"
                    data-srcs-id="119"
                    onChange={() => setSelectedAvatar("119")}
                  />
                  <label htmlFor="mens_avatar1119">
                    <img
                      src="/assets/images/profile/womannew1.png"
                      className="w-20"
                    />
                  </label>
                </div>
                <div className="flex-shrink-0 w-48">
                  <input
                    type="radio"
                    name="avatar"
                    id="mens_avatar2120"
                    data-srcs-id="120"
                    onChange={() => setSelectedAvatar("120")}
                  />
                  <label htmlFor="mens_avatar2120">
                    <img
                      src="/assets/images/profile/womannew1.png"
                      className="w-20"
                    />
                  </label>
                </div>
                {/* Add more slides as needed */}
              </div>
            </div>
          </div>
          <div className="block mt-8 mb-5">
            <h3 className="text-lg font-semibold">Others</h3>
          </div>
          <div className="block mt-5 mb-5">
            <div className="swiper mySwiper_womens_slider3">
              <div className="flex space-x-10">
                <div className="flex-shrink-0 w-48">
                  <input
                    type="radio"
                    name="avatar"
                    id="special_avatar1123"
                    data-srcs-id="123"
                    onChange={() => setSelectedAvatar("123")}
                  />
                  <label htmlFor="special_avatar1123">
                    <img
                      src="/assets/images/profile/womannew1.png"
                      className="w-20"
                    />
                  </label>
                </div>
                <div className="flex-shrink-0 w-48">
                  <input
                    type="radio"
                    name="avatar"
                    id="special_avatar2124"
                    data-srcs-id="124"
                    onChange={() => setSelectedAvatar("124")}
                  />
                  <label htmlFor="special_avatar2124">
                    <img
                      src="/assets/images/profile/womannew1.png"
                      className="w-20"
                    />
                  </label>
                </div>
                {/* Add more slides as needed */}
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Choose colour",
      content: (
        <div className="avatar_colors_box">
          <ColorPicker onChange={setSelectedColor} />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-2/6 2xl:w-8/12 mt-4 md:mt-0 pe-6">
        <div className="py-4">
          <div className="avtar_bg">
            <img
              className="bg-white p-6 rounded-full min-h-[150px] bg-cover w-[155px] h-[150px] object-scale-down m-auto border border-gray-300"
              src="/assets/images/profile/blank_avatar.png"
              alt="Avatar"
            />
          </div>
          <div className="style_avtar-btn mt-5">
            <Link
              href="#"
              onClick={handleOpenModal}
              className="w-full text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-[#0067e1] text-white bg-[#0067e1] rounded-md py-3 px-5 md:px-6 lg:px-8 md:py-3.5 lg:py-3 hover:text-[#0067e1] hover:bg-transparent hover:shadow mt-3 sm:mt-0"
            >
              Stylea din avatar
            </Link>
          </div>
        </div>
      </div>

      <div className="md:w-4/6 2xl:w-8/12 mt-4 md:mt-0">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col space-y-4 sm:space-y-5">
              <div className="block">
                <label
                  htmlFor="generated_username"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-1 cursor-pointer"
                >
                  Användarnamn
                </label>
                <Field
                  id="generated_username"
                  name="generated_username"
                  type="text"
                  placeholder=""
                  className="py-2 px-4 md:px-5 w-full transition duration-150 ease-in-out border text-xs lg:text-sm rounded-md placeholder-body min-h-12 bg-white focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
                <ErrorMessage
                  name="generated_username"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="block mt-3">
                <label
                  htmlFor="fname"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-1 cursor-pointer"
                >
                  Förnamn *
                </label>
                <Field
                  id="fname"
                  name="fname"
                  type="text"
                  placeholder=""
                  className="py-2 px-4 md:px-5 w-full transition duration-150 ease-in-out border text-xs lg:text-sm rounded-md placeholder-body min-h-12 bg-white focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
                <ErrorMessage
                  name="fname"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="block mt-3">
                <label
                  htmlFor="lname"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-1 cursor-pointer"
                >
                  Efternamn *
                </label>
                <Field
                  id="lname"
                  name="lname"
                  type="text"
                  placeholder=""
                  className="py-2 px-4 md:px-5 w-full transition duration-150 ease-in-out border text-xs lg:text-sm rounded-md placeholder-body min-h-12 bg-white focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
                <ErrorMessage
                  name="lname"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="block mt-3">
                <label
                  htmlFor="email"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-1 cursor-pointer"
                >
                  E-post *
                </label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder=""
                  className="py-2 px-4 md:px-5 w-full transition duration-150 ease-in-out border text-xs lg:text-sm rounded-md placeholder-body min-h-12 bg-white focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="block mt-3">
                <label
                  htmlFor="phone"
                  className="block text-gray-600 font-semibold text-sm leading-none mb-1 cursor-pointer"
                >
                  Telefon
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder=""
                  className="py-2 px-4 md:px-5 w-full transition duration-150 ease-in-out border text-xs lg:text-sm rounded-md placeholder-body min-h-12 bg-white focus:outline-none focus:border-heading h-11 md:h-12"
                  autoComplete="off"
                  spellCheck="false"
                  aria-invalid="false"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="relative mt-8">
                <input type="hidden" name="action" value="editprofile" />
                <button
                  data-variant="flat"
                  className="w-full text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-[#0067e1] text-white bg-[#0067e1] rounded-md py-3 px-5 md:px-6 lg:px-8 md:py-3.5 lg:py-3 hover:text-[#0067e1] hover:bg-transparent hover:shadow mt-3 sm:mt-0"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Uppdatera din profil
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <hr />
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {/* <button
              onClick={handleCloseModal}
              className="text-gray-600 hover:text-gray-900"
            >
              Close
            </button> */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSaveModal}
            className="w-full kkkk text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border border-[#0067e1] text-white bg-[#0067e1] rounded-md py-3 px-5 md:px-6 lg:px-8 md:py-3.5 lg:py-3 hover:text-[#0067e1] hover:bg-transparent hover:shadow"
          >
            Spara avatar
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg max-w-4xl w-full min-h-[70vh]">
          <div className="flex justify-end mb-4"></div>
          <Tabs tabs={tabs} />
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
