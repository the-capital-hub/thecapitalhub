import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Layout.scss";
// import Footer from "../Footer/Footer";
import Footer from "../../../../components/Footer/Footer";


function Layout() {
  return (
    <>
      <Header />
      <main className="body">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;