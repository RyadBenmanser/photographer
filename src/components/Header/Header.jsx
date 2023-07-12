import React from "react";
import { MdCamera } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <div className="h-screen">
        <div
          className={`w-full h-full bg-fixed`}
          style={{
            backgroundImage:
              "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://themewagon.github.io/snapshot/images/bg-1.jpg')",
          }}
        >
          <div className="container  h-full mx-auto">
            <div className="w-full text-white h-full flex justify-center flex-col items-center">
              <div className="flex items-center flex-col relative ">
                <div className="">
                  <MdCamera className="w-24 h-24" />
                </div>
                <h1 className="text-5xl font-bold ">SNAPCHOT</h1>
              </div>
              <div className="my-24">
                <h2 className="sm:text-7xl text-6xl text-center font-bold">
                  WE MAKE SOMETHING GREAT
                </h2>
              </div>
              <div className="text-center sm:text-2xl">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts.
              </div>
              <div className="mt-6 ">
                <button className="btn btn-accent m-6 px-8 py-4">
                  CONTACT US -&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
