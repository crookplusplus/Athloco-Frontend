import React from "react";
import TournamentCard from "../Components/TournamentCard";

const Tournaments = () => {
  return (
    <main className="flex flex-col align-center justify-center font-pop mt-4 w-full">
      <article className="flex flex-col align-center justify-center ">
        <h1 className="text-center font-bold text-3xl tracking-wider uppercase leading-10 ">
          Upcoming Tournaments
        </h1>
        <hr className="bg-tan border-0 h-0.5 my-5" />
        <div className="grid grid-cols-3 gap-8">
          <TournamentCard
            title="Spring Classic"
            location="Redondo Beach"
            month="April"
            day="13"
            type="Coed"
            teamSize="4"
            divisions="Fun/Competitive"
            prize="5000"
            host="SmackFest Events"
          />
          <TournamentCard
            title="Spring Classic"
            location="Redondo Beach"
            month="April"
            day="13"
            type="Coed"
            teamSize="4"
            divisions="Fun/Competitive"
            prize="5000"
            host="SmackFest Events"
          />
          <TournamentCard
            title="Spring Classic"
            location="Redondo Beach"
            month="April"
            day="13"
            type="Coed"
            teamSize="4"
            divisions="Fun/Competitive"
            prize="5000"
            host="SmackFest Events"
          />
        </div>
      </article>
    </main>
  );
};

export default Tournaments;
