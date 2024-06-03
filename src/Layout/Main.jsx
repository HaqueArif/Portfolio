import { Outlet } from "react-router-dom";
import NavBar from "../pages/Home/NavBar/NavBar";
import Footer from "../pages/Home/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
