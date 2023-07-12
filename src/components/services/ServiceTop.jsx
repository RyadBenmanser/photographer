import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { GoVideo } from "react-icons/go";
import { TfiVideoClapper } from "react-icons/tfi";
const ServiceTop = () => {
  const servicesTab = [
    {
      icon: <BsCameraVideo className="text-7xl mx-auto lg:mx-0" />,
      title: "MOVIES & ADVERTISING VIDEOS",
      description: `A small river named Duden flows by their place and supplies
          it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences.`,
    },
    {
      icon: <GoVideo className="text-7xl mx-auto lg:mx-0" />,
      title: `CLIP & MUSIC VIDEOS`,
      description: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.`,
    },
    {
      icon: <TfiVideoClapper className="text-7xl mx-auto lg:mx-0" />,
      title: `SHORT FILM PRODUCTIONS`,
      description: `A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences.      `,
    },
  ];
  return (
    <div className="w-full">
      <div className="container mx-auto flex ">
        {/* text  */}
        <div className="lg:w-9/12 ">
          <div className="lg:w-5/12">
            <div className="text-2xl font-bold">PHOTOGRAPHY SERVICES</div>
            <div className="text-xl font-semibold my-4">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </div>
          </div>
          {/* item of services */}
          <div className="w-full  flex lg:items-end mt-24 flex-col">
            {servicesTab.map((x, index) => {
              return (
                <div
                  key={index}
                  className="4/12 mx-3 my-8 text-center lg:text-left"
                >
                  {x.icon}
                  <div className="text-2xl font-bold my-4">{x.title} </div>
                  <div className="text-xl ">{x.description}</div>
                </div>
              );
            })}
          </div>
        </div>
        {/* background Images */}
        <div className="lg:w-3/12 ">
          <div
            className="bg-cover bg-center h-full bg-no-repeat w-full"
            style={{
              backgroundImage:
                "url('https://themewagon.github.io/snapshot/images/about.jpg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTop;
