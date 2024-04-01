import React from "react";
import AthlocoImage from "/bigAthlogo.png";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { TbPlayVolleyball } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";

const Home = () => {
  return (
    <main className="flex flex-col align-center font-pop align-center w-11/12">
      <article className="flex flex-col align-center text-center mt-1">
        <img src={AthlocoImage} className="w-96 mx-auto mt-10" />
        <hr className="bg-tan border-0 h-0.5 my-5" />
        <p className="text-3xl font-medium text-center tracking-wider leading-relaxed font-pop mt-5">
          If you're a crazy about volleyball, this is your one-stop-shop to know
          what's going on in the South Bay. Find out about local tournaments and
          training opportunities.
        </p>
        <p className="text-3xl font-medium text-center tracking-wider leading-relaxed font-pop my-10">
          If you want to play volleyball,{" "}
          <span className="underline italic decoration-2 decoration-athloco">
            Go Athloco!
          </span>
        </p>
        <div className="flex flex-row justify-center">
          <Link to="/tournaments">
            <Button className="bg-athloco text-black mx-5 hover:enabled:bg-athloco transition ease-in-out hover:scale-110 duration-500 hover:text-white ">
              <GiTrophyCup className=" stroke-2 text-md mr-2" />
              Find Tournaments
            </Button>
          </Link>
          <Button className="bg-athloco text-black mx-5 hover:enabled:bg-athloco transition ease-in-out hover:scale-110 duration-500 hover:text-white">
            <TbPlayVolleyball className=" stroke-2 text-lg mr-2" />
            Find Trainers
          </Button>
        </div>
      </article>
    </main>
  );
};

export default Home;
