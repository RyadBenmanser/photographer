import React from "react";

import ContactInfo from "./ContactInfo";
import ContactFrom from "./ContactFrom";
const Contact = () => {
  return (
    <div>
      <div className="w-full ">
        <ContactInfo />
        <ContactFrom />
      </div>
    </div>
  );
};

export default Contact;
