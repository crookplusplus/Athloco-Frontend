import React from "react";
import Nav from "./Nav";
import SocialButtons from "./SocialButtons";
import { BsHeartFill } from "react-icons/bs";

const Layout = (props) => {
  return (
    <div className="bg-bgcolor w-full min-h-screen">
      <div className="">
        <Nav />
        <div className="flex justify-center top-24 m-10">{props.children}</div>
      </div>
      <footer className="flex flex-col items-center">
        <hr className="border-0 bg-tan w-11/12 h-0.5 my-5" />
        <SocialButtons />
        <div>
          <p className="text-center text-black1 font-pop">
            Founded in the{" "}
            <span>
              <BsHeartFill className="text-athloco inline" />
            </span>{" "}
            of the South Bay!
          </p>
          <p className="text-center text-black1 font-pop"> © 2024 Athloco.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
