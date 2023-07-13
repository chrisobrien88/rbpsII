import Image from "next/image";
import { Collapse } from "react-collapse";

interface PlayerCardProps {
  player: {
    firstName: string;
    lastName: string;
    handicapIndex: number;
    totalPoints: number;
    roundsPlayed: number;
    allRoundsAverage: number;
    bestScore: number;
    secondScore: number;
    thirdScore: number;
    fourthScore: number;
    profilePic: string;
  };
  index: number;
}

const PlayerCard = ({ player, index }: PlayerCardProps) => {
  return (
    <div className="m-4 p-3 flex flex-row justify-around items-center w-300 bg-slate-200 hover:bg-slate-100 rounded-lg hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group">
      <p>{index + 1}</p>
      <Image
        src={player.profilePic}
        alt={`${player.firstName} having a laugh`}
        height={100}
        width={100}
        className="p-0 rounded-full"
      />
      <p className="text-slate-500 p-4">
        {player.firstName} {player.lastName}
      </p>
      <p className="text-slate-700 p-1">{player.totalPoints} pts</p>

      <div className="flex flex-col scale-0 group-hover:scale-100 transition-all duration-300 ease-in">
        <p className="text-slate-500 p-1">{player.handicapIndex} handicap</p>
        <p className="text-slate-500 p-1">
          Rounds played: {player.roundsPlayed}
        </p>
        <p className="text-slate-500 p-1">
          Avg score (all rounds): {player.allRoundsAverage}
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;
