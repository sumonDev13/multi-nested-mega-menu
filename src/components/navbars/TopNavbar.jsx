import { Link } from "react-router-dom";
import { SmallDownArrow } from "../../assets/icons";

const TopNavbar = () => {
  const leftItems = [
    { text: "Language", icon: <SmallDownArrow /> },
    { text: "Help Center" },
    {
      text: (
        <>
          Helpline: <span>0954781656</span>
        </>
      ),
    },
  ];

  const rightItems = [
    { text: "Become a Seller" },
    { text: "Order Track" },
    { text: "Sign up / Login", color: "customOrange" },
  ];

  const renderItems = (items, alignRight = false) => {
    return (
      <ul className={`flex items-center gap-[37px] ${alignRight && "ml-auto"}`}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex text-${item.color || (alignRight ? "customBlack" : "customBlack")} duration-100 hover:text-${item.color || "customOrange"} items-center gap-[4.17px]`}
          >
            <Link>{item.text}</Link>
            {item.icon && item.icon}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-customGray py-[5px]">
      <div className="custom-container flex items-center justify-between">
        <div>{renderItems(leftItems)}</div>
        <div>{renderItems(rightItems, true)}</div>
      </div>
    </div>
  );
};

export default TopNavbar;
