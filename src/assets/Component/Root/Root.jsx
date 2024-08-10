import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="px-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
