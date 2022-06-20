/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, setScreenSize, screenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div>
      <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">

        <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />

        <h3 className="font-extrabold text-xl hidden sm:block justify-center items-center mt-auto mb-auto">
        INDIA ENERGY MODEL(MESSAGEix TOOL) FOR ENERGY PLANNING
        </h3>

      <div className="flex justify-center items-center">
//         <TooltipComponent content="IIT Kanpur" position="BottomCenter">
//           <div
//             className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
//           >
//             <a href="https://www.iitk.ac.in/" target="_blank" rel="noopener noreferrer">
//               <img
//                 className="w-full h-8"
//                 src="https://www.iitk.ac.in/new/images/logo/iitk-logo.svg"
//                 alt="iitk logo"
//               />
//             </a>
//           </div>
//         </TooltipComponent>

        <div className="w-0.5 h-8 ml-2 bg-black mx-auto mb-auto mt-auto" />

        <TooltipComponent content="Energy India" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          >
            <a href="https://www.niti.gov.in/" target="_blank" rel="noopener noreferrer">
            <img
              className="w-full h-8"
              src="http://www.niti.gov.in//sites/default/files/gbb-uploads/NITI-Aayog-logo-d7ykne.png"
              alt="user-profile"
            />
            </a>
          </div>
        </TooltipComponent>
      </div>
      </div>
      <h2 className="font-extrabold text-sm sm:hidden text-center
      justify-center items-center mt-auto mb-auto"
      >
        INDIA ENERGY MODEL(MESSAGEix TOOL) FOR ENERGY PLANNING
      </h2>
    </div>
  );
};

export default Navbar;
