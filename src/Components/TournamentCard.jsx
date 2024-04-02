import React from "react";
import { TbTournament } from "react-icons/tb";
import { TbPlayVolleyball } from "react-icons/tb";
import { GiCash } from "react-icons/gi";

const TournamentCard = (props) => {
  return (
    <div className="bg-black1 col-span-1 grid grid-cols-2 grid-rows-2 grid-flow-col font-pathway gap-4 h-48 rounded-md text-timberwolf">
      <div className="m-4">
        <h3 className="uppercase text-lg font-semibold tracking-wide text-white">
          {props.title}
        </h3>
        <h5 className>{props.location}</h5>
      </div>
      <div className="mt-10 mx-4">
        <h6 className="tracking-wide">{props.host}</h6>
      </div>
      <div className="flex justify-end mt-4 mx-4 gap-2">
        <TbPlayVolleyball className="text-blue text-lg stroke-2 inline" />
        <TbTournament className="text-amber text-lg stroke-2 inline" />
        <GiCash className="text-green text-lg stroke-2 inline" />
      </div>
      <div className="flex flex-col mx-2"> 
        <span className="self-end uppercase tracking-wide mr-4 mb-3 leading-relaxed">{props.month}</span>
        <span className="self-end text-athloco text-8xl font-extrabold leading-9">{props.day}</span>
      </div>
    </div>
  );
};

export default TournamentCard;
