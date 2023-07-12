import React from "react";

const ContactFrom = () => {
  const formTab = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }];

  return (
    <div className=" container mx-auto  flex flex-wrap bg-neutral rounded-md p-5">
      <div className="lg:w-1/2 w-full p-4">
        <form className="  shadow-md rounded-lg px-2 pt-6 pb-8 mb-4">
          <div className="flex  flex-col">
            {formTab.map((x, index) => {
              return (
                <div key={index} className="mx-auto form-control w-full">
                  <label className="label">
                    <span className="label-text">What is your name?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full  "
                  />
                </div>
              );
            })}
            <div className="w-full my-4 flex justify-end ">
              <button className="btn rounded-full w-full">Send Message</button>
            </div>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 w-full   p-4">
        <div className="relative aspect-w-16 h-[50vw] lg:h-full aspect-h-9">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=9%20rue%20el%20madani%20belhassani,%20Av.%20Mohamed%20VI,%20Rabat%2010000+(My%20Business%20Photographe%20Mariage%20Rabat%20-%20Prestige%20PhotoName)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
