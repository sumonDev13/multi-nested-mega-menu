import { Outlet } from "react-router-dom";
import TopNav from "../components/navbars/TopNavbar";
import BottomNav from "../components/navbars/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <TopNav />
        <BottomNav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
