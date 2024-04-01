import React, { useState, useEffect, useRef } from "react";
import Athlogo from "../assets/athlogo.png";
import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";
import { HiMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Nav = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setOpen(false);
    }
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 ${
        scroll ? "bg-black1 text-white" : "bg-bgcolor text-black1"
      } flex justify-center w-full`}
    >
      <nav className="w-11/12">
        <div className="flex justify-between py-4">
          <Link className="flex flex-row justify-between items-center" to="/">
            <img src={Athlogo} className="w-14 rounded" />
            <span className="text-2xl font-semibold font-pop ml-4 hover:text-athloco hover:text-3xl duration-500">
              ATHLOCO
            </span>
          </Link>
          <div
            className="w-16 absolute md:hidden right-2 top-8 hover:text-athloco duration-500 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <CgClose className="text-2xl stroke-2" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </div>
          <ul
            className={`md:flex md:justify-between md:items-center   ${
              open
                ? `${
                    scroll ? "bg-black1" : "bg-white"
                  } absolute top-2 pb-2 duration-500 ease-in-out transform translate-y-20 opacity-100 rounded-b-md w-1/2`
                : "hidden -translate-y-2"
            } `}
            ref={menuRef}
          >
            <li className="px-4 text-lg hover:text-athloco hover:text-xl duration-500">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 text-lg hover:text-athloco hover:text-xl duration-500">
              <Dropdown label="Activities" inline className="bg-black1">
                <Link to="/tournaments">
                  <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                    Tournaments
                  </Dropdown.Item>
                </Link>
                <Link>
                  <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                    Leagues
                  </Dropdown.Item>
                </Link>
              </Dropdown>
            </li>
            <li className="px-4 text-lg hover:text-athloco hover:text-xl duration-500">
              <Dropdown label="Services" inline className="bg-black1">
                <Link>
                  <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                    Training
                  </Dropdown.Item>
                </Link>
                <Link>
                  <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                    Health & Wellness
                  </Dropdown.Item>
                </Link>
                <Link>
                  <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                    Player Matching
                  </Dropdown.Item>
                </Link>
              </Dropdown>
            </li>
            <li className="px-4 text-lg hover:text-athloco hover:text-xl duration-500">
              <Dropdown label="Communities" inline className="bg-black1">
                <Link>
                  <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                    <Link>Get Social</Link>
                  </Dropdown.Item>
                </Link>
                <Link>
                  <Dropdown.Item className="text-white hover:text-athloco focus:text-athloco">
                    <Link>Meet & Greets</Link>
                  </Dropdown.Item>
                </Link>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
