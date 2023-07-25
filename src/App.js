import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import InvestorNavbar from "./components/Investor/InvestorNavbar/InvestorNavbar";
import InvestorHome from "./components/Investor/InvestorHome/InvestorHome";
import PrivateRoute from "./components/Routes/PrivateRoutes";
import Documentation from "./components/Investor/Documentation/Documentation";
import SavePost from "./components/Investor/SavePost/SavePost";
import OneLink from "./components/Investor/OneLink/OneLink";
import Team from "./components/Investor/Team/Team";
import Customer from "./components/Investor/Customer/Customer";
import Investors from "./components/Investor/Investors/Investors";
import Support from "./components/Investor/Support/Support";
import Help from "./components/Investor/Help/Help";
import Feed from "./components/Investor/Feed/Feed";
import CreatePost from "./components/Investor/CreatePost/CreatePost";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Service from "./components/Service/Service";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <AboutUs />
                <Footer />
              </>
            }
          />

          <Route
            path="/contactus"
            element={
              <>
                <Navbar />
                <ContactUs />
                <Footer />
              </>
            }
          />

          <Route
            path="/service"
            element={
              <>
                <Navbar />
                <Service />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/investor" element={<InvestorHome />} />
            <Route path="/home" element={<Feed />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/savePost" element={<SavePost />} />
            <Route path="/onelink" element={<OneLink />} />
            <Route path="/team" element={<Team />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/help" element={<Help />} />
            <Route path="/support" element={<Support />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
