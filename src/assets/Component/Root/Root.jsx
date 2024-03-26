import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
        <Navbar> </Navbar>
      <div className="px-10">
        <Outlet> </Outlet>
      </div>
      <Footer> </Footer>
    </div>
  );
};

export default Root;
