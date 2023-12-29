import { Link } from "react-router-dom";
import Logo from "/src/assets/images/logo.png";
import {
  CloudServiceIcon,
  FavoriteIcon,
  SearchIcon,
  ShoppingIcon,
  UserIcon,
} from "../../assets/icons";

const Navbar = () => {
  const navItems = [
    { icon: <UserIcon />, className: "hover-there" },
    { icon: <FavoriteIcon />, className: "hover-there" },
    { icon: <ShoppingIcon />, className: "hover-there" },
    { icon: <CloudServiceIcon /> },
  ];

  return (
    <div className="mt-[12px]">
      <div className="custom-container flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center w-full max-w-[704px] justify-between bg-customGray rounded-lg">
          <input
            type="text"
            className="text-[14px] p-[12px] w-full bg-customGray rounded-lg"
            placeholder="Search Product"
          />
          <span>
            <SearchIcon />
          </span>
        </div>
        <div>
          <ul className="flex items-center gap-3">
            {navItems.map((item, index) => (
              <li key={index} className={item.className}>
                {item.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
