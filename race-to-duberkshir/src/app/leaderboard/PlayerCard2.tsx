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
    <div className=""
    >{player.lastName}</div>
  );
};

export default PlayerCard;
