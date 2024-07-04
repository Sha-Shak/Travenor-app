import React from 'react';
import { IconContext } from 'react-icons';
import { BsChatDots } from 'react-icons/bs';
import { CgSearch } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { RiHome3Line } from 'react-icons/ri';
import { RxCalendar } from 'react-icons/rx';

const Bottombar: React.FC = () => {
  return (
    <div className="flex items-center justify-around pb-4 border rounded-xl shadow-xl h-[10vh]">
      <IconContext.Provider value={{ color: '#7D848D', size: '20' }}>
        <RiHome3Line />
        <RxCalendar />
        <div className="relative">
          <div className="absolute bg-gradient-to-br from-teal-500 to-teal-400 opacity-50" />
          <div className="bg-gradient-to-br from-teal-500 to-teal-400 rounded-full w-10 h-10 flex items-center justify-center">
            <CgSearch size={18} color="#ffffff" />
          </div>
        </div>
        <BsChatDots />
        <FiUser />
      </IconContext.Provider>
    </div>
  );
};

export default Bottombar;
