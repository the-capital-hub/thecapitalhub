import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.scss";
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
import Fundraising from "./components/Service/Fundraising/Fundraising";
import PitchDeck from "./components/Service/PitchDeck/PitchDeck";
import WebDevelopment from "./components/Service/WebDevelopment/WebDevelopment";
import FinancialsDocumentation from "./components/Service/FinancialsDocumentation/FinancialsDocumentation";
import StartupConsulting from "./components/Service/StartupConsulting/StartupConsulting";
import CompliancesDeligence from "./components/Service/CompliancesDeligence/CompliancesDeligence";
import OurInvestor from "./components/OurInvestor/OurInvestor";
import OneLinkEditPage from "./components/Investor/OneLink/OneLinkEditPage/OneLinkEditPage";
import InvestorManageAccount from "./components/Investor/InvestorManageAccount/InvestorManageAccount";
import Profile from "./pages/InvestorView/Profile/Profile";
import Company from "./pages/InvestorView/Company/Company";
import OnePager from "./pages/InvestorView/OnePager/OnePager";
import DocumentationIV from "./pages/InvestorView/Documentation/Documentation";
import ValidateOneLink from "./pages/InvestorView/ValidateOneLink/ValidateOneLink";
import InvestNow from "./pages/InvestorView/InvestNow/InvestNow";
import FolderContents from "./components/Investor/FolderContents/FolderContents";
import Blog from "./components/Blog/Blog";
import BlogDetailed from "./components/Blog/BlogDetailed/BlogDetailed";
import StartUpBlogOne from "./components/Blog/StartUpBlog/StartUpBlogOne";
import StartUpBlogTwo from "./components/Blog/StartUpBlog/StartUpBlogTwo";
import StartUpBlogThree from "./components/Blog/StartUpBlog/StartUpBlogThree";
import NewPasswordPopUp from "./components/PopUp/NewPasswordPopUp/NewPasswordPopUp";
import TermOfService from "./components/TermOfService/TermOfService";
import Privacy from "./components/Privacy/Privacy";
import SecuritySafeGuard from "./components/SecuritySafeGuard/SecuritySafeGuard";
import Connection from "./components/Investor/Connection/Connection";

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
            path="/reset-password"
            element={
              <>
                <Navbar />
                <NewPasswordPopUp />
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <Navbar />
                <Blog />
                <Footer />
              </>
            }
          />

          <Route
            path="/blog/webdevlopment"
            element={
              <>
                <Navbar />
                <BlogDetailed />
                <Footer />
              </>
            }
          />

          <Route
            path="/blog/startupOne"
            element={
              <>
                <Navbar />
                <StartUpBlogOne />
                <Footer />
              </>
            }
          />

          <Route
            path="/blog/startupTwo"
            element={
              <>
                <Navbar />
                <StartUpBlogTwo />
                <Footer />
              </>
            }
          />

          <Route
            path="/blog/startupThree"
            element={
              <>
                <Navbar />
                <StartUpBlogThree />
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

          <Route
            path="/fundraising"
            element={
              <>
                <Navbar />
                <Fundraising />
                <Footer />
              </>
            }
          />

          <Route
            path="/pitch-deck"
            element={
              <>
                <Navbar />
                <PitchDeck />
                <Footer />
              </>
            }
          />
          <Route
            path="/financials-document"
            element={
              <>
                <Navbar />
                <FinancialsDocumentation />
                <Footer />
              </>
            }
          />
          <Route
            path="/sturtup-consulting"
            element={
              <>
                <Navbar />
                <StartupConsulting />
                <Footer />
              </>
            }
          />
          <Route
            path="/complience"
            element={
              <>
                <Navbar />
                <CompliancesDeligence />
                <Footer />
              </>
            }
          />
          <Route
            path="/web-development"
            element={
              <>
                <Navbar />
                <WebDevelopment />
                <Footer />
              </>
            }
          />

          <Route
            path="/our-investor"
            element={
              <>
                <Navbar />
                <OurInvestor />
                <Footer />
              </>
            }
          />
          <Route
            path="/term-of-service"
            element={
              <>
                <Navbar />
                <TermOfService />
                <Footer />
              </>
            }
          />
          <Route
            path="/privacy"
            element={
              <>
                <Navbar />
                <Privacy />
                <Footer />
              </>
            }
          />
          <Route
            path="/security-safeguard"
            element={
              <>
                <Navbar />
                <SecuritySafeGuard />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<InvestorHome />} />
            <Route path="/home" element={<Feed />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/savePost" element={<SavePost />} />
            <Route path="/onelink" element={<OneLink />} />
            <Route path="/onelink/edit" element={<OneLinkEditPage />} />
            <Route path="/documentation/:route" element={<FolderContents />} />
            <Route
              path="/investor/manage-account"
              element={<InvestorManageAccount />}
            />
            <Route path="/team" element={<Team />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/help" element={<Help />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/support" element={<Support />} />
          </Route>

          {/* OneLink */}
          <Route path="/onelink/:username" element={<ValidateOneLink />}>
            <Route path="" element={<Profile />} />
            <Route path="company" element={<Company />} />
            <Route path="onePager" element={<OnePager />} />
            <Route path="documentation" element={<DocumentationIV />} />
            <Route path="investnow" element={<InvestNow />} />
            <Route path="documentation/:route" element={<FolderContents />} />
            {/* <Route path="investNow" element={<DocumentationIV />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
