"use client";
import React from "react";
import CircularProgression from "./CircularProgression";

const ServiceDown = () => {
  const serviceTab = [
    {
      value: 90,
      title: "CREATION",
    },
    {
      value: 80,
      title: "DEVELOPMENT",
    },
    {
      value: 75,
      title: "PRODUCTION",
    },
  ];
  return (
    <div className="my-24 w-full">
      <div className="container mx-auto w-full flex items-center flex-wrap lg:flex-nowrap">
        {/* Image */}
        <div className="w-6/12 lg:h-[600px]">
          <div
            className="bg-cover bg-center h-full"
            style={{
              backgroundImage:
                "url('https://themewagon.github.io/snapshot/images/about-2.jpg')",
            }}
          ></div>
        </div>
        {/* text */}
        <div className="w-full h-full ">
          <div className="flex lg:justify-around lg:flex-row flex-col justify-center">
            {serviceTab.map((x, index) => {
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-3xl">{x.title}</div>
                  <div>
                    <CircularProgression serviceTab={serviceTab} index={index}  />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:w-96 mx-auto mt-20 lg:ml-12 text-lg font-semibold">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDown;
