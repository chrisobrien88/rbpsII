import { getPlayersScoresData } from "../../../api/scoreCardsData";
import Navbar from "../Navbar";
import PlayerCard from "./PlayerCard2";
import { useState } from "react";

const Leaderboard: React.FC = async () => {
  const playersScoreCardsData = await getPlayersScoresData();

  const playersInfo = playersScoreCardsData?.map((scoreCard) => {
    const [
      firstName,
      lastName,
      handicapIndex,
      totalPoints,
      roundsPlayed,
      allRoundsAverage,
      bestScore,
      secondScore,
      thirdScore,
      fourthScore,
      profilePic,
    ] = scoreCard;
    // check to see if player has any scores

    return {
      firstName,
      lastName,
      handicapIndex,
      totalPoints,
      roundsPlayed,
      allRoundsAverage,
      bestScore,
      secondScore,
      thirdScore,
      fourthScore,
      profilePic,
    };
  });

  playersInfo?.shift();
  const playersSortedByTotalScore = playersInfo?.sort(
    (a, b) => b.totalPoints - a.totalPoints
  );

  return (
    <div>
      <Navbar />

      <div className="max-w-xl m-10 px-4 sm:px-6 lg:max-w-4xl lg:px-8">
        <ul role="list" className="">
          {/* {playersSortedByTotalScore?.map((player, index) => (
              <div key={index}>
                <PlayerCard player={player} index={index} />
              </div>
            )
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
