import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SocialButtons = () => {
  return (
    <section className="flex flex-row justify-center">
      <Link className="bg-black1 rounded-full p-2 mx-2 mb-4">
        <FaInstagram className="text-3xl text-white hover:text-athloco" />
      </Link>
      <Link className="bg-black1 rounded-full p-2 mx-2 mb-4">
        <FaYoutube className="text-3xl text-white hover:text-athloco" />
      </Link>
      <Link className="bg-black1 rounded-full p-2 mx-2 mb-4">
        <FaTiktok className="text-3xl text-white hover:text-athloco" />
      </Link>
      <Link className="bg-black1 rounded-full p-2 mx-2 mb-4">
        <FaRedditAlien className="text-3xl text-white hover:text-athloco" />
      </Link>
      <Link className="bg-black1 rounded-full p-2 mx-2 mb-4">
        <FaXTwitter className="text-3xl text-white hover:text-athloco" />
      </Link>
    </section>
  );
};

export default SocialButtons;
