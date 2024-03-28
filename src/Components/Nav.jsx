import React, { useState, useEffect } from "react";
import Athlogo from "../assets/athlogo.png";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);



  return (
    <header className={`fixed top-0 ${scroll ? "bg-black1 text-white" : "bg-bgcolor text-black1"} flex justify-center w-full`}>
      <nav className="w-11/12">
        <div className="flex justify-between py-4">
          <div className="flex flex-row justify-between items-center">
            <img src={Athlogo} className="w-14 rounded" />
            <span className="text-2xl font-pop ml-4">Athloco</span>
          </div>
          <ul className="flex justify-between items-center">
            <li className="px-4 text-lg hover:text-athloco hover:text-xl duration-500">
              <Link>Home</Link>
            </li>
            <li className="px-4 text-lg hover:text-athloco hover:text-xl duration-500">
              <Dropdown label="Activities" inline className="bg-black1">
                <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                  <Link>Tournaments</Link>
                </Dropdown.Item>
                <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                  <Link>Leagues</Link>
                </Dropdown.Item>
              </Dropdown>
            </li>
            <li className="px-4 text-lg hover:text-athloco hover:text-xl duration-500">
              <Dropdown label="Services" inline className="bg-black1">
                <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                  <Link>Training</Link>
                </Dropdown.Item>
                <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                  <Link>Health & Wellness</Link>
                </Dropdown.Item>
                <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                  <Link>Player Matching</Link>
                </Dropdown.Item>
              </Dropdown>
            </li>
            <li className="px-4 text-lg hover:text-athloco hover:text-xl duration-500">
              <Dropdown label="Communities" inline className="bg-black1">
                <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                  <Link>Get Social</Link>
                </Dropdown.Item>
                <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                  <Link>Meet & Greets</Link>
                </Dropdown.Item>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
