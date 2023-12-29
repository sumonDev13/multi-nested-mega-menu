import Hero from "../components/heroSection/Hero";
import Navbar from "../components/navbars/Navbar";
import TopNavbar from "../components/navbars/TopNavbar";

const Layout = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Hero />
    </div>
  );
};

export default Layout;
