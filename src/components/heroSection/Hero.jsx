import { categories } from "../../utils/Categories";
import { RightIcon } from "../../assets/icons";
import { useState } from "react";
import Slider from "../swiper/Swiper";

const images = [
  "/src/assets/images/banner.png",
  "/src/assets/images/banner.png",
  "/src/assets/images/banner.png",
  "/src/assets/images/banner.png",
  "/src/assets/images/banner.png",
];

const Hero = () => {
  const [subMenu, setSubMenu] = useState(null);
  const [isActiveMenu, setIsActiveMenu] = useState(null);

  return (
    <div className="relative mt-[12px]">
      <Slider images={images} />
      <div className="relative custom-container w-full top-0 z-10">
        <ul
          className="w-full absolute top-[-381px] max-w-[230px]  p-[6px] flex flex-col gap-y-3"
          style={{ backgroundColor: "white" }}
        >
          {categories.map((menu, index) => (
            <li
              key={index}
              className=" hover:text-customOrange flex items-center gap-2 text-customBlack cursor-pointer"
              onMouseEnter={() => setIsActiveMenu(index)}
              onMouseLeave={() => setIsActiveMenu(null)}
            >
              <span className="">{menu.icon}</span>
              <p className="flex items-center justify-between pr-5 w-full capitalize">
                <span>{menu.name}</span>
                {menu.dropdown.length > 0 && <RightIcon />}
              </p>

              {isActiveMenu === index && menu.dropdown.length > 0 && (
                <ul
                  className="w-full absolute top-0 left-[95%] bottom-0 max-w-[230px] p-[6px] flex flex-col gap-y-3 duration-200"
                  style={{ backgroundColor: "white" }}
                >
                  {menu.dropdown.map((submenu, subIndex) => (
                    <li
                      key={subIndex}
                      className=" hover:text-customOrange flex items-center gap-2 text-customBlack cursor-pointer"
                      onMouseEnter={() => setSubMenu(subIndex)}
                      onMouseLeave={() => setSubMenu(null)}
                    >
                      <span>{submenu.icon}</span>
                      <p className="flex items-center justify-between pr-5 w-full capitalize ">
                        {submenu.name}
                        {submenu.dropdown.length > 0 && <RightIcon />}
                      </p>

                      {subMenu === subIndex && submenu.dropdown.length > 0 && (
                        <ul
                          className="w-full absolute top-0 bottom-0 sm:max-w-[230px] p-[6px] flex flex-col gap-y-3 duration-200  left-[95%] "
                          style={{ backgroundColor: "white" }}
                        >
                          {submenu.dropdown.map((subMenu, subsubIndex) => (
                            <li
                              key={subsubIndex}
                              className=" hover:text-customOrange flex items-center gap-2 text-customBlack cursor-pointer"
                            >
                              <span>{subMenu.icon}</span>
                              <p className="capitalize">{subMenu.name}</p>
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
