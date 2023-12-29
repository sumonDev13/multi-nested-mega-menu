import { Link } from "react-router-dom";
import Logo from "/src/assets/images/logo.png";
import {
  CloudServiceIcon,
  FavoriteIcon,
  SearchIcon,
  ShoppingIcon,
  UserIcon,
} from "../../assets/icons";

const BottomNav = () => {
  return (
    <div className="mt-[12px]">
      <div className="custom-container flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="flex items-center w-full max-w-[704px]  justify-between bg-customGray"  style={{borderRadius:"10px"}}>
          <input
            type="text"
            className="text-[14px] p-[12px] w-full outline-none border-none  bg-customGray"
            placeholder="Search Product"
           
          />
          <span>
            <SearchIcon />
          </span>
        </div>
        <div>
          <ul className="flex items-center gap-3">
            <li className="user-action">
              <UserIcon />
            </li>
            <li className="user-action">
              <FavoriteIcon />
            </li>
            <li className="user-action">
              <ShoppingIcon />
            </li>
          </ul>
        </div>
        <div>
          <Link>
            <CloudServiceIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
