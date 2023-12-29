import { useState } from "react";
import Slider from "../swiper/Swiper";
import { menus } from "../../utils/Categories";
import { RightIcon } from "../../assets/icons";

const images = [
  "https://i.ibb.co/Ydry5NB/slider-banner.png",
  "https://i.ibb.co/Ydry5NB/slider-banner.png",
  "https://i.ibb.co/Ydry5NB/slider-banner.png",
  "https://i.ibb.co/Ydry5NB/slider-banner.png",
  "https://i.ibb.co/Ydry5NB/slider-banner.png",
];

const Hero = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [subSubMenu, setActiveSubSubMenu] = useState(null);

  return (
    <div className="relative mt-[12px]">
      <Slider images={images} />
      <div className="relative custom-container w-full top-0 z-10">
        <ul className="w-full absolute top-[-381px] max-w-[230px]  p-[6px] flex flex-col gap-y-3" style={{backgroundColor:"white"}}>
          {menus.map((menu, index) => (
            <li
              key={index}
              className=" hover:text-customOrange flex items-center gap-2 text-customBlack cursor-pointer"
              onMouseEnter={() => setActiveSubMenu(index)}
              onMouseLeave={() => setActiveSubMenu(null)}
            >
              <span className="">{menu.icon}</span>
              <p className="flex items-center justify-between pr-5 w-full capitalize">
                <span>{menu.name}</span>
                {menu.dropdown.length > 0 && <RightIcon />}
              </p>

              {/* Every menu is a object, and every have dropdown property in object, so here i actually checking if dropdown have data then submenu will show and work */}
              {activeSubMenu === index && menu.dropdown.length > 0 && (
                <ul className="w-full absolute top-0 left-[95%] bottom-0 max-w-[230px] p-[6px] flex flex-col gap-y-3 duration-200"  style={{backgroundColor:"white"}}>
                  {menu.dropdown.map((submenu, subIndex) => (
                    <li
                      key={subIndex}
                      className=" hover:text-customOrange flex items-center gap-2 text-customBlack cursor-pointer"
                      onMouseEnter={() => setActiveSubSubMenu(subIndex)}
                      onMouseLeave={() => setActiveSubSubMenu(null)}
                    >
                      <span>{submenu.icon}</span>
                      <p className="flex items-center justify-between pr-5 w-full capitalize ">
                        {submenu.name}
                        {submenu.dropdown.length > 0 && <RightIcon />}
                      </p>

                      {subSubMenu === subIndex &&
                        submenu.dropdown.length > 0 && (
                          <ul className="w-full absolute top-0 bottom-0 sm:max-w-[230px] p-[6px] flex flex-col gap-y-3 duration-200  left-[95%] "  style={{backgroundColor:"white"}}>
                            {submenu.dropdown.map((subsubmenu, subsubIndex) => (
                              <li
                                key={subsubIndex}
                                className=" hover:text-customOrange flex items-center gap-2 text-customBlack cursor-pointer"
                              >
                                <span>{subsubmenu.icon}</span>
                                <p className="capitalize">{subsubmenu.name}</p>
                              </li>
                            ))}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
