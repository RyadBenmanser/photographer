import React from "react";
import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
const ContactInfo = () => {
  const contactTab = [
    {
      icon: <FaMapSigns className="text-4xl" />,
      title: "Address",
      desription: `198 West 21th Street, Suite 721 New York NY 10016`,
    },
    {
      icon: <BsFillTelephoneFill className="text-4xl" />,
      title: "Contact Number",
      desription: `+ 1235 2355 98`,
    },
    {
      icon: <FaPaperPlane className="text-4xl" />,
      title: "Email Address",
      desription: `info@yoursite.com`,
    },
    {
      icon: <BsGlobeAmericas className="text-4xl" />,
      title: "Website",
      desription: "yoursite.com",
    },
  ];
  return (
    <div>
      {" "}
      <div className="md:w-96 mx-auto text-center my-24">
        <div className="text-2xl font-bold">Contact Me</div>
        <div className="text-xl">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country.
        </div>
      </div>
      {/* Cards */}
      <div className="container mx-auto my-12 h-auto">
        <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
          {contactTab.map((x, index) => {
            return (
              <div
                key={index}
                className="card w-full bg-neutral shadow-xl h-auto "
              >
                <div className="card-body items-center flex-grow-0  text-center">
                  <h2 className="card-title">{x.icon}</h2>
                  <p className="text-lg font-bold my-3">{x.title}</p>
                  <div className="">
                    <p className=" text-lg font-semibold">{x.desription}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
