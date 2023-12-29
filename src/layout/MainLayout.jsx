import { Outlet } from "react-router-dom";
import TopNav from "../components/navbars/TopNav";
import BottomNav from "../components/navbars/BottomNav";

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
