import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
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
import StartUpBlogFour from "./components/Blog/StartUpBlog/StartUpBlogFour";
import StartUpBlogFive from "./components/Blog/StartUpBlog/StartUpBlogFive";
import NewPasswordPopUp from "./components/PopUp/NewPasswordPopUp/NewPasswordPopUp";
import TermOfService from "./components/TermOfService/TermOfService";
import Privacy from "./components/Privacy/Privacy";
import SecuritySafeGuard from "./components/SecuritySafeGuard/SecuritySafeGuard";
import Connection from "./components/Investor/Connection/Connection";
import Search from "./pages/StartUp/Search/Search";
import ProtectedInvestorRoutes from "./pages/Investor/ProtectedInvestorRoutes/ProtectedInvestorRoutes";
import InvestorProfile from "./pages/Investor/Profile/Profile";
import MyStartUp from "./pages/Investor/MyStartUp/MyStartUp";
import Explore from "./pages/Investor/Explore/Explore";
import OtherUserProfile from "./pages/StartUp/OtherUserProfile/OtherUserProfile";
import Messages from "./pages/StartUp/Messages/Messages";
import Notifications from "./pages/StartUp/Notifications/Notifications";
import Syndicates from "./pages/Investor/Syndicates/Syndicates";
import LiveDeals from "./pages/Investor/LiveDeals/LiveDeals";
import SearchResults from "./pages/Investor/SearchResults/SearchResults";
import Chats from "./pages/ChatPages/Chats/Chats";
import MySchedule from "./pages/Investor/MySchedule/MySchedule";
import WriteBlog from "./pages/StartUp/WriteBlog/WriteBlog";
import BlogWrapper from "./components/Blog/BlogWrapper/BlogWrapper";
import MeeshoBlog from "./pages/Blogs/MeeshoBlog/MeeshoBlog";
import GoodDotBlog from "./pages/Blogs/GoodDotBlog/GoodDotBlog";
import MyKareBlog from "./pages/Blogs/MyKareBlog/MyKareBlog";
import InvestorHomeFeed from "./pages/Investor/Home/Home";
import NewInvestorManageAccount from "./components/NewInvestor/InvestorManageAccount/NewInvestorManageAccount";
import SavedPosts from "./pages/Investor/SavedPosts/SavedPosts";
import UXBlog from "./pages/Blogs/UXBlog/UXBlog";
import CompanyProfilePage from "./pages/StartUp/CompanyProfile/CompanyProfilePage";

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

          {/* Chat */}
          <Route path="/chats" element={<Chats />} />

          {/* StartUp */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<InvestorHome />} />
            <Route path="/user/:userId" element={<OtherUserProfile />} />
            <Route path="/home" element={<Feed />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/write-blog" element={<WriteBlog />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/savePost" element={<SavePost />} />
            <Route path="/onelink" element={<OneLink />} />
            <Route path="/onelink/edit" element={<OneLinkEditPage />} />
            <Route path="/documentation/:route" element={<FolderContents />} />
            <Route path="/manage-account" element={<InvestorManageAccount />} />
            <Route path="/team" element={<Team />} />
            <Route path="/customers" element={<Customer />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/help" element={<Help />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/search" element={<Search />} />
            <Route path="/support" element={<Support />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/company-profile" element={<CompanyProfilePage />} />
          </Route>

          {/* OneLink */}
          <Route path="/onelink/:username" element={<ValidateOneLink />}>
            <Route path="" element={<Company />} />
            <Route path="profile" element={<Profile />} />
            <Route path="onePager" element={<OnePager />} />
            <Route path="documentation" element={<DocumentationIV />} />
            <Route path="investnow" element={<InvestNow />} />
            <Route path="documentation/:route" element={<FolderContents />} />
            {/* <Route path="investNow" element={<DocumentationIV />} /> */}
          </Route>

          {/* Investor */}
          <Route path="/investor" element={<ProtectedInvestorRoutes />}>
            <Route path="home" element={<InvestorHomeFeed />} />
            <Route path="" element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<InvestorProfile />} />
            <Route
              path="manage-account"
              element={<NewInvestorManageAccount />}
            />
            <Route path="mystartups" element={<MyStartUp />} />
            <Route path="explore" element={<Explore />} />
            <Route path="syndicates" element={<Syndicates />} />
            <Route path="live-deals" element={<LiveDeals />} />
            <Route path="search-results" element={<SearchResults />} />
            <Route path="my-schedule" element={<MySchedule />} />
            <Route path="saved-posts" element={<SavedPosts />} />
          </Route>

          {/* Blogs */}
          <Route path="/blog" element={<BlogWrapper />}>
            <Route path="" element={<Blog />} />
            <Route
              path="meesho-revolutionising-e-commerce-for-entrepreneurs"
              element={<MeeshoBlog />}
            />
            <Route
              path="sustainable-alternative-to-traditional-meat-products-gooddot-as-example"
              element={<GoodDotBlog />}
            />
            <Route
              path="empowering-patient-care-mykare-health-innovative-approach-to-healthtech"
              element={<MyKareBlog />}
            />
            <Route path="webdevlopment" element={<BlogDetailed />} />
            <Route path="startupOne" element={<StartUpBlogOne />} />
            <Route path="startupTwo" element={<StartUpBlogTwo />} />
            <Route path="startupThree" element={<StartUpBlogThree />} />
            <Route
              path="telemedicine-health-revolution-at-your-fingertips-medtel-health-care-company-leading-the-way"
              element={<StartUpBlogFour />}
            />
            <Route
              path="how-zomato-is-revolutionising-the-food-supply-chain-through-food-technology"
              element={<StartUpBlogFive />}
            />
            <Route
              path="ux-how-it-can-be-a-differentiator-in-a-crowded-marketplace"
              element={<UXBlog />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
