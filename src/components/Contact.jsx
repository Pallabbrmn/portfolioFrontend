import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="md:w-[90%] mx-auto pb-40">
      <h1 className="text-5xl font-extrabold text-center py-10">CONTACT</h1>
      <div className="md:grid md:grid-cols-[2fr,1fr]">
        <div className="px-4 md:px-20">
          <h1 className="text-4xl font-medium">
            "Let's connect our passion for innovation and drive positive change
            together."
          </h1>
          <ContactForm />
        </div>
        <div className="mt-10 md:mt-0 w-[90%] mx-auto ">
          <h1 className="text-4xl font-medium border-b-2 shadow-sm">
            Contact Details
          </h1>
          <p className="text-2xl font-medium mb-8">
            pallabbarman2288@gmail.com
          </p>
          <h1 className="text-4xl font-medium border-b-2 shadow-sm">
            My Digital Spaces
          </h1>
          <Link
            to="https://www.linkedin.com/in/pallabbarman1/"
            target="blank"
            className="text-2xl font-medium block"
          >
            LinkeIn
          </Link>
          <Link
            to="https://github.com/Pallabbrmn"
            target="blank"
            className="text-2xl font-medium block"
          >
            Github
          </Link>
          <Link
            to="https://x.com/pallabB_"
            target="blank"
            className="text-2xl font-medium block"
          >
            Twitter
          </Link>
          <Link
            to="https://in.pinterest.com/pallabmmviii/"
            target="blank"
            className="text-2xl font-medium block"
          >
            Pinterest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
