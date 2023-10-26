import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

// Wrappers
import ValidateOneLink from "./pages/InvestorView/ValidateOneLink/ValidateOneLink";
import ProtectedInvestorRoutes from "./pages/Investor/ProtectedInvestorRoutes/ProtectedInvestorRoutes";
import BlogWrapper from "./components/Blog/BlogWrapper/BlogWrapper";
import EcommerceLayout from "./components/ECommerace/Layout/Layout/Layout";
import InvestorOneLinkLayout from "./pages/InvestorOneLink/InvestorOneLinkLayout/InvestorOneLinkLayout";

// Pages
import Chats from "./pages/ChatPages/Chats/Chats";

// Routes
import StartUpRoutes from "./routes/StartUpRoutes";
import OneLinkRoutes from "./routes/OneLinkRoutes";
import InvestorRoutes from "./routes/InvestorRoutes";
import BlogRoutes from "./routes/BlogRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import EcommerceRoutes from "./routes/EcommerceRoutes";
import NotFound404 from "./pages/Error/NotFound404/NotFound404";
import { useDispatch } from "react-redux";
import { setIsMobileView } from "./Store/features/design/designSlice";
import { useEffect } from "react";
import InvestorOneLinkRoutes from "./routes/InvestorOneLinkRoutes";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    function handleWindowResize() {
      const isMobile = window.innerWidth <= 820;
      dispatch(setIsMobileView(isMobile));
    }
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {PublicRoutes()}

        {/* Chat */}
        <Route path="/chats" element={<Chats />} />

        {/* StartUp */}
        {StartUpRoutes()}

        {/* OneLink */}
        <Route path="/onelink/:username/:userId" element={<ValidateOneLink />}>
          {OneLinkRoutes()}
        </Route>

        {/* Investor */}
        <Route path="/investor" element={<ProtectedInvestorRoutes />}>
          {InvestorRoutes()}
        </Route>

        {/* Investor OneLink */}
        <Route
          path="/investor/onelink/:oneLink/:userId"
          element={<InvestorOneLinkLayout />}
        >
          {InvestorOneLinkRoutes()}
        </Route>

        {/* Blogs */}
        <Route path="/blog" element={<BlogWrapper />}>
          {BlogRoutes()}
        </Route>

        {/* E-Commerce */}
        <Route path="/e-commerce" element={<EcommerceLayout />}>
          {EcommerceRoutes()}
        </Route>

        

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}

export default App;
