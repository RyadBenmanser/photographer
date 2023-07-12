import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex w-full flex-wrap flex-col lg:flex-row lg:flex-nowrap lg:gap-2 gap-6">
          {/* ----------------Images-------------------- */}
          <div
            className="lg:w-1/2 bg-cover h-screen bg-center bg-no-repeat relative"
            style={{
              backgroundImage:
                "url('https://themewagon.github.io/snapshot/images/about-2.jpg')",
            }}
          ></div>
          {/* ------------Text + Images --------------- */}
          <div className="lg:w-1/2  ">
            <div className="lg:w-11/12 h-full lg:mx-auto  flex flex-col justify-evenly gap-7">
              <div className="text-3xl font-bold ">
                SNAPSHOT IS A CREATIVE DIRECTION, PHOTOGRAPHY AGENCY
              </div>
              <div className="text-xl font-semibold ">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.Far far
                away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts. Separated they live
                in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </div>
              <div className="text-lg font-bold">120 PROJECT COMPLETE</div>
              <div>
                <div className="flex justify-around flex-wrap lg:flex-nowrap gap-2 ">
                  <div
                    className="h-[300px] w-10/12 bg-cover bg-no-repeat bg-center "
                    style={{
                      backgroundImage:
                        "url('https://themewagon.github.io/snapshot/images/about-3.jpg')",
                      backgroundSize: "",
                    }}
                  ></div>
                  <div
                    className="h-[300px] w-10/12 bg-cover bg-no-repeat bg-center "
                    style={{
                      backgroundImage:
                        "url('https://themewagon.github.io/snapshot/images/about.jpg')",
                      backgroundSize: "",
                    }}
                  ></div>
                </div>

                <div className="mt-4">
                  <p className="text-xl">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia..
                  </p>
                </div>
                <div className="mt-3">— Lucy Lee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
