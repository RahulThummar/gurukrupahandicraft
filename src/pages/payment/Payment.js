import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Payment = () => {
  const payRef = useRef();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.orebiReducer.products);
  const [clientName, setclientName] = useState("");
  const [phone, setPhone] = useState("");
  const [messages, setMessages] = useState("");
  const [errClientName, setErrClientName] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errMessages, setErrMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [sendLoader, setSendLoader] = useState(false);

  useEffect(() => {
    if (location.state && products.length > 0) {
      const productLines = location.state.item.map(
        (product) =>
          `id:${product._id} - Name: ${product.name} - Quantity: ${product.quantity} - Price: ₹${product.price}`
      );
      const result = productLines.join("  |||  \n");
      setMessages(result);
    } else {
      navigate("/");
    }
  }, [location]);

  const handleName = (e) => {
    setclientName(e.target.value);
    setErrClientName("");
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  const PhoneNumberValidation = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  console.log(payRef.current, "uyhbyjyh");

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!phone) {
      setErrPhone("Enter your Contact Number");
    } else {
      if (!PhoneNumberValidation(phone) || phone.length > 15) {
        setErrPhone("Enter a Valid Contact Number");
      }
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
    }
    if (clientName && phone && PhoneNumberValidation(phone) && messages) {
      setSendLoader(true);
      emailjs
        .sendForm(
          "service_ginaaep",
          "template_olkcxsm",
          payRef.current,
          "J2HXXQB0HemuGxCyY"
        )
        .then(
          (result) => {
            setSendLoader(false);
            setSuccessMsg(
              `Thank you dear ${clientName}, Your messages has been received successfully. Futher details will sent to you by your contact number at ${phone}.`
            );
            dispatch(resetCart());
          },
          (error) => {
            setSendLoader(false);
            console.log(error.text);
          }
        );

      // setSuccessMsg(
      //   `Thank you dear ${clientName}, Your messages has been received successfully. Futher details will sent to you by your contact number at ${phone}.`
      // );
      // const mailtoLink = `mailto:rahul.thummar327@gmail.com?subject=Order Form Submission&body=Client Name: ${clientName}%0D%0APhone: ${phone}%0D%0AProducts: ${messages}`;
      // window.location.href = mailtoLink;
      // dispatch(resetCart())
    }
  };
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <div className="pb-10">
        <div className="max-w-container mx-auto px-4">
          {successMsg ? (
            <p className="pb-20 w-96 font-medium text-green-500">
              {successMsg}
            </p>
          ) : (
            <form ref={payRef} className="pb-20">
              <h1 className="font-titleFont font-semibold text-3xl">
                Fill up a form for place the order
              </h1>
              <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
                <div>
                  <p className="text-base font-titleFont font-semibold px-2">
                    Name
                  </p>
                  <input
                    name="user_name"
                    style={{ marginTop: "5px" }}
                    onChange={handleName}
                    value={clientName}
                    className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                    type="text"
                    placeholder="Enter your name here"
                  />
                  {errClientName && (
                    <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                      <span className="text-sm italic font-bold">!</span>
                      {errClientName}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-base font-titleFont font-semibold px-2">
                    Contact Number
                  </p>
                  <input
                    name="user_phone"
                    style={{ marginTop: "5px" }}
                    onChange={handlePhone}
                    value={phone}
                    className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                    type="tel"
                    placeholder="Enter your contact number here"
                  />
                  {errPhone && (
                    <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                      <span className="text-sm italic font-bold">!</span>
                      {errPhone}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-base font-titleFont font-semibold px-2">
                    Products
                  </p>
                  <textarea
                    name="message"
                    style={{ marginTop: "5px" }}
                    onChange={handleMessages}
                    value={messages}
                    cols="30"
                    rows="3"
                    disabled
                    className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                    type="text"
                    placeholder="Enter your name here"
                  ></textarea>
                  {errMessages && (
                    <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                      <span className="text-sm italic font-bold">!</span>
                      {errMessages}
                    </p>
                  )}
                </div>
                {sendLoader ? (
                  <span className="spinner ms-5"></span>
                ) : (
                  <button
                    onClick={handlePost}
                    className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold"
                  >
                    Send Request
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        {successMsg && (
          <Link to="/">
            <button className="w-52 h-10 bg-primeColor text-white text-lg mt-4 hover:bg-black duration-300">
              Explore More
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Payment;
