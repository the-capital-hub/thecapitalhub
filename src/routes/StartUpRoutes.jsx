import { Suspense, lazy, useEffect } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../components/Routes/PrivateRoutes";
import SinglePost from "../components/SinglePost/SinglePost";
import SuspenseLoader from "../components/SuspenseLoader/SuspenseLoader";
import FundingInfo from "../pages/StartUp/Funding/FundingInfo";
import { selectTheme } from "../Store/features/design/designSlice";
import { useSelector } from "react-redux";

const InvestorHome = lazy(() =>
  import("../components/Investor/InvestorHome/InvestorHome")
);
const OtherUserProfile = lazy(() =>
  import("../pages/StartUp/OtherUserProfile/OtherUserProfile")
);
const Feed = lazy(() => import("../components/Investor/Feed/Feed"));
const CreatePost = lazy(() =>
  import("../components/Investor/CreatePost/CreatePost")
);
const WriteBlog = lazy(() => import("../pages/StartUp/WriteBlog/WriteBlog"));
const Documentation = lazy(() =>
  import("../components/Investor/Documentation/Documentation")
);
const SavePost = lazy(() => import("../components/Investor/SavePost/SavePost"));
const OneLink = lazy(() => import("../components/Investor/OneLink/OneLink"));
const OneLinkEditPage = lazy(() =>
  import("../components/Investor/OneLink/OneLinkEditPage/OneLinkEditPage")
);
const FolderContents = lazy(() =>
  import("../components/Investor/FolderContents/FolderContents")
);
const InvestorManageAccount = lazy(() =>
  import("../components/Investor/InvestorManageAccount/InvestorManageAccount")
);
const Team = lazy(() => import("../components/Investor/Team/Team"));
const Customer = lazy(() => import("../components/Investor/Customer/Customer"));
const Investors = lazy(() =>
  import("../components/Investor/Investors/Investors")
);
const Help = lazy(() => import("../components/Investor/Help/Help"));
const Connection = lazy(() =>
  import("../components/Investor/Connection/Connection")
);
const Search = lazy(() => import("../pages/StartUp/Search/Search"));
const Support = lazy(() => import("../components/Investor/Support/Support"));
const Messages = lazy(() => import("../pages/StartUp/Messages/Messages"));
const Notifications = lazy(() =>
  import("../pages/StartUp/Notifications/Notifications")
);
const CompanyProfilePage = lazy(() =>
  import("../pages/StartUp/CompanyProfile/CompanyProfilePage")
);
const EditCompanyProfilePage = lazy(() =>
  import("../pages/StartUp/CompanyProfile/EditCompanyProfilePage")
);
const StartupExplore = lazy(() =>
  import("../pages/StartUp/StartupExplore/StartupExplore")
);
const OtherCompanyProfilePage = lazy(() =>
  import("../pages/StartUp/CompanyProfile/OtherCompanyProfilePage")
);
const ProfileAchievements = lazy(() =>
  import("../pages/StartUp/Achievements/Achievements")
);

function StartUpRoutes() {
  // Light and dark Theme
  const theme = useSelector(selectTheme);

  useEffect(() => {
    // document.body.setAttribute("data-bs-theme", "dark");
    // document.body.setAttribute("data-bs-theme", "light");
    document.body.setAttribute("data-bs-theme", theme);
    return function () {
      document.body.setAttribute("data-bs-theme", "light"); // temporary
    };
  }, [theme]);

  return (
    <Route element={<PrivateRoute />}>
      <Route
        path="/profile"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <InvestorHome />
          </Suspense>
        }
      />
      <Route
        path="/user/:userId"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <OtherUserProfile />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Feed />
          </Suspense>
        }
      />
      <Route
        path="/createpost"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <CreatePost />
          </Suspense>
        }
      />
      <Route
        path="/write-blog"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <WriteBlog />
          </Suspense>
        }
      />
      <Route
        path="/documentation"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Documentation />
          </Suspense>
        }
      />
      <Route
        path="/savePost"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <SavePost />
          </Suspense>
        }
      />
      <Route
        path="/onelink"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <OneLink />
          </Suspense>
        }
      />
      <Route
        path="/onelink/edit"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <OneLinkEditPage />
          </Suspense>
        }
      />
      <Route
        path="/documentation/:route"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <FolderContents />
          </Suspense>
        }
      />
      <Route
        path="/manage-account"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <InvestorManageAccount />
          </Suspense>
        }
      />
      <Route
        path="/team"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Team />
          </Suspense>
        }
      />
      <Route
        path="/customers"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Customer />
          </Suspense>
        }
      />
      <Route
        path="/investors"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Investors />
          </Suspense>
        }
      />
      <Route
        path="/help"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Help />
          </Suspense>
        }
      />
      <Route
        path="/connection"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Connection />
          </Suspense>
        }
      />
      <Route
        path="/search"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Search />
          </Suspense>
        }
      />
      <Route
        path="/support"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Support />
          </Suspense>
        }
      />
      <Route
        path="/messages"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Messages />
          </Suspense>
        }
      />
      <Route
        path="/notifications"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Notifications />
          </Suspense>
        }
      />
      <Route
        path="/company-profile"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <CompanyProfilePage />
          </Suspense>
        }
      />
      <Route
        path="/company-profile/edit"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <EditCompanyProfilePage />
          </Suspense>
        }
      />

      <Route
        path="/company-profile/:founderId"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <OtherCompanyProfilePage />
          </Suspense>
        }
      />

      <Route
        path="/explore"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <StartupExplore />
          </Suspense>
        }
      />
      <Route
        path="/posts/:_id"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <SinglePost />
          </Suspense>
        }
      />
      <Route
        path="/profile/achievements"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <ProfileAchievements />
          </Suspense>
        }
      />
      <Route
        path="/funding"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <FundingInfo />
          </Suspense>
        }
      />
    </Route>
  );
}

export default StartUpRoutes;
