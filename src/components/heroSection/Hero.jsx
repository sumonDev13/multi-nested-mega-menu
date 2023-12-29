import { useState } from "react";
import Slider from "../swiper/Swiper";
import { categories } from "../../utils/Categories";
import { RightIcon } from "../../assets/icons";
import { images } from "../../utils/SliderImages";

const Hero = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuHover = (index) => {
    setActiveMenu(index);
  };

  return (
    <div className="relative mt-[12px]">
      <Slider images={images} />
      <div className="relative custom-container w-full top-0 z-10">
        <ul className="w-full absolute top-[-381px] max-w-[230px] p-[6px] flex flex-col gap-y-3" style={{ backgroundColor: "white" }}>
          {categories.map((menu, index) => (
            <li
              key={index}
              className="hover:text-customOrange flex items-center gap-2 text-customBlack cursor-pointer"
              onMouseEnter={() => handleMenuHover(index)}
              onMouseLeave={() => handleMenuHover(null)}
            >
              <span>{menu.icon}</span>
              <p className="flex items-center justify-between pr-5 w-full capitalize">
                <span>{menu.name}</span>
                {menu.dropdown.length > 0 && <RightIcon />}
              </p>

              {activeMenu === index && menu.dropdown.length > 0 && (
                <ul className="w-full absolute top-0 left-[95%] bottom-0 max-w-[230px] p-[6px] flex flex-col gap-y-3 duration-200" style={{ backgroundColor: "white" }}>
                  {menu.dropdown.map((submenu, subIndex) => (
                    <li
                      key={subIndex}
                      className="hover:text-customOrange flex items-center gap-2 text-customBlack cursor-pointer"
                    >
                      <span>{submenu.icon}</span>
                      <p className="flex items-center justify-between pr-5 w-full capitalize ">
                        {submenu.name}
                        {submenu.dropdown.length > 0 && <RightIcon />}
                      </p>

                      {submenu.dropdown.length > 0 && (
                        <ul className="w-full absolute top-0 left-[95%] bottom-0 max-w-[230px] p-[6px] flex flex-col gap-y-3 duration-200" style={{ backgroundColor: "white" }}>
                          {submenu.dropdown.map((subSubMenu, subSubIndex) => (
                            <li
                              key={subSubIndex}
                              className="hover:text-customOrange flex items-center gap-2 text-customBlack cursor-pointer"
                            >
                              <span>{subSubMenu.icon}</span>
                              <p className="capitalize">{subSubMenu.name}</p>
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
