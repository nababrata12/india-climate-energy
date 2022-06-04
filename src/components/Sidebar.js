/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GoChevronDown } from 'react-icons/go';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const [submenuopen, setsubmenuopen] = useState(
    Array(links.length).fill(false),
  );
  const [flag, setflag] = useState(false);

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  const openMenu = (link, index) => {
    // console.log("click");
    if (link) {
      // console.log(index);
      submenuopen[index] = !submenuopen[index];
      const new_array = submenuopen;
      setsubmenuopen(new_array);
      setflag(!flag);
    }
  };

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <TooltipComponent content="NITI Aayog" position="BottomCenter">
              <div className="flex items-center justify-center p-2 mt-auto mb-auto gap-2 cursor-pointer rounded-lg">
                <a
                  href="https://www.niti.gov.in/"
                  className="flex items-center justify-center p-2 gap-2 cursor-pointer -mb-5 rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-full h-8"
                    src="https://niti.gov.in/edm/images/NITIAayog_LOGO_picture.jpg"
                    alt="user-profile"
                  />
                  <img
                    className="w-full h-4"
                    src="https://niti.gov.in/edm/images/NITIAayog_LOGO_text.jpg"
                    alt="user-profile"
                  />
                </a>
              </div>
            </TooltipComponent>

            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-6 ">
            {links.map((item, index) => (
              <div key={item.title}>
                <Link
                  // onClick={item.links && showSubnev}
                  onClick={() => openMenu(item.links, index)}
                  to={item.path}
                  className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase"
                >
                  <div>
                    <h2 className="flex justify-between items-center pr-5">
                      {item.title}
                      <GoChevronDown />
                    </h2>
                  </div>
                </Link>
                {submenuopen[index]
                  && item.links.map((link) => (
                    <NavLink
                      to={`/${link.name}`}
                      key={link.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : '',
                      })}
                      className={({ isActive }) => (isActive ? activeLink : normalLink)}
                    >
                      {link.icon}
                      <span className="capitalize ">{link.name} </span>
                    </NavLink>
                  ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
