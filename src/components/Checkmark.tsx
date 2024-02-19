"use client"
import React, { useEffect, useState } from 'react';
// import { PlusIcon, CheckIcon } from '@heroicons/react/solid';
import { IoCheckmark } from "react-icons/io5";
import { HiOutlinePlus } from "react-icons/hi";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { changeSave } from '../../lib/calls';

interface SaveIconProps {
  expId: string;
  isSaved: boolean;
}

const AnimatedIconButton = ({expId, isSaved}: SaveIconProps) => {
  const [isActive, setIsActive] = useState(isSaved);

  const toggleActive = () => {
      const newValue = !isActive
      changeSave(newValue, expId)
   
    setIsActive(!isActive);
  };

  console.log("checkmark got " + isSaved)


  return (
    <button
      className={`w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center focus:outline-none ${
        isActive ? 'bg-green-500' : 'bg-gray-200'
      }`}
      onClick={toggleActive}
    >
      <div className="transition-transform duration-500 ease-in-out">
        {isActive ? (
          <IoCheckmark className="w-4 h-4 text-white" />
        ) : (
          <FaBookmark className="w-3 h-3 text-black" />
        )}
      </div>
    </button>
  );
};

export default AnimatedIconButton;
