import TopNav from "../components/navbars/TopNavbar";
import BottomNav from "../components/navbars/Navbar";
import Hero from "../components/heroSection/Hero";

const MainLayout = () => {
  return (
    <div>
      <TopNav />
      <BottomNav />
      <Hero />
    </div>
  );
};

export default MainLayout;
