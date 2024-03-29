import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };

  const handleChangeproduct = (item) => {
    navigate("/shop", { state: { item: item } });
  };

  return (
    <div className="w-full bg-[#F5F5F3] py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title=" More about Gurukrupa Handicraft" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Your one-stop destination for exquisite wedding materials,
              crafting essentials, and a world of creative possibilities.
            </p>
            <ul className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/gurukrupahandicrft?igsh=MXJ0aXpkNWN3bjRuag=="
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaInstagram />
                </li>
              </a>
              <a
                href="https://wa.me/+919712107544"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                  <FaWhatsapp />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">
            <li
              onClick={() => handleChangeproduct("Lotiset")}
              className="font-titleFont text-base text-lightText hover:text-black  decoration-[2px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Lotiset
            </li>
            <li
              onClick={() => handleChangeproduct("Toran")}
              className="font-titleFont text-base text-lightText hover:text-black  decoration-[2px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Toran
            </li>
            <li
              onClick={() => handleChangeproduct("Rumal")}
              className="font-titleFont text-base text-lightText hover:text-black  decoration-[2px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Rumal
            </li>
            <li
              onClick={() => handleChangeproduct("Khatli")}
              className="font-titleFont text-base text-lightText hover:text-black  decoration-[2px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Khatli
            </li>
            <li
              onClick={() => handleChangeproduct("Moti")}
              className="font-titleFont text-base text-lightText hover:text-black  decoration-[2px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Moti
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Marriage Materials" />
          <ul className="flex flex-col gap-2">
            <li
              onClick={() => handleChangeproduct("Varmala")}
              className="font-titleFont text-base text-lightText hover:text-black  decoration-[2px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Varmala
            </li>
            <li
              onClick={() => handleChangeproduct("Haldi")}
              className="font-titleFont text-base text-lightText hover:text-black  decoration-[2px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Haldi
            </li>
            <li
              onClick={() => handleChangeproduct("Manek Stambh")}
              className="font-titleFont text-base text-lightText hover:text-black  decoration-[2px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Manek Stambh
            </li>
            <li
              onClick={() => handleChangeproduct("Kodiya")}
              className="font-titleFont text-base text-lightText hover:text-black  decoration-[2px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Kodiya
            </li>
            <li
              onClick={() => handleChangeproduct("Kankavati")}
              className="font-titleFont text-base text-lightText hover:text-black  decoration-[2px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300"
            >
              Kankavati
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="Subscribe to our newsletter." />
          <div className="w-full">
            <p className="text-center mb-4"></p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                >
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
