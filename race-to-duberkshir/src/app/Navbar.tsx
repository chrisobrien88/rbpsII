import React from "react";
import { FiBarChart2, FiPlus, FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div
      className="flex flex-row justify-around items-center w-screen h-auto bottom-0 pb-6 bg-slate-600 text-slate-100 fixed shadow-sm font-mono"
      role="navigation"
    >
      <NavBarItem icon={FiBarChart2} text="Leaderboard" />
      <NavBarItem icon={FiPlus} text="New Round" />
      <NavBarItem icon={FiUser} text="Stats" />
    </div>
  );
};

export default Navbar;

interface NavBarIconProps {
  icon: any;
  text: string;
}

const NavBarItem = ({ icon: Icon, text,  }: NavBarIconProps) => {
  return (
    <div className="mt-3 p-3 flex flex-col justify-center items-center bg-slate-500 hover:bg-slate-400 rounded-lg hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group">
      <div className="sidebar-icon">
        <Icon size={30} />
      </div>
      <p className="text-xs font-semibold text-center scale-0 group-hover:scale-100 transition-all duration-100 ease-in">{text}</p>
    </div>
  );
};
