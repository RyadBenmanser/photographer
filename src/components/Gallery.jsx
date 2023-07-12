import React from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
const Gallery = () => {
  const galleryTab = [
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-1.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-2.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-3.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-4.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl: "https://themewagon.github.io/snapshot/images/model-5.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
  ];
  return (
    <div className="w-full">
      {/* text */}

      <div className="container mx-auto">
        <div className="lg:w-96 mx-auto text-center">
          <p className="text-2xl font-bold">SELECTED PROJECTS</p>
          <p className="text-lg font-semibold my-3 ">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country.
          </p>
        </div>
      </div>
      {/* images gallery */}
      <div className=" ">
        <div className="flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap mx-2 md:mx-0">
          {galleryTab.map((x, index) => {
            return (
              <div key={index} className="md:h-[50vw] h-screen relative  ">
                <div className="group h-full">
                  <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{ backgroundImage: `url("${x.imageUrl}")` }}
                  >
                    {" "}
                    <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
                      <div>{x.type}</div>
                      <div>{x.title}</div>
                    </div>
                  </div>
                  <div className="bg-black opacity-0 group-hover:opacity-75  absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out">
                    <p className="text-white ">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
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

export default Gallery;
