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
    <section className="flex justify-between gap-x-6 py-5">
      <details
        open={false}
        className="w-96 bg-white p-4 rounded-xl shadow-md group mx-auto max-h-[400px] open:!max-h-[400px] transition-[max-height] duration-500 overflow-hidden"
      >
        <summary className="outline-none cursor-pointer focus:underline focus:text-indigo-600 font-semibold marker:text-transparent group-open:before:rotate-90  before:origin-center relative before:w-[18px] before:h-[18px] before:transition-transform before:duration-200 before:-left-1 before:top-2/4 before:-translate-y-2/4 before:absolute before:bg-no-repeat before:bg-[length:18px_18px] before:bg-center before:bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20class%3D%22h-6%20w-6%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%3E%0A%20%20%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M9%205l7%207-7%207%22%20%2F%3E%0A%3C%2Fsvg%3E')]">
          <div className="flex gap-x-4">
            {player.profilePic ? (
              <Image
                src={player.profilePic}
                alt={player.firstName}
                width={100}
                height={100}
                className="flex-shrink-0 w-100 h-100 rounded-full"
              />
            ) : null}

            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {player.firstName} {player.lastName}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {player.handicapIndex}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">
              {player.totalPoints} pts
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-500">
              rounds: {player.roundsPlayed}
            </p>
          </div>
        </summary>

        <hr className="my-2 scale-x-150" />

        <div className="text-sm -m-4 -mt-2 p-4 bg-gray-50">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {player.allRoundsAverage}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">avg</p>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">
                {player.bestScore}
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">best</p>
            </div>
          </div>
      </details>
    </section>
  );
};

export default PlayerCard;
