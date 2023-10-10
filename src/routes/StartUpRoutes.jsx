import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "../components/Routes/PrivateRoutes";
import SinglePost from "../components/SinglePost/SinglePost";

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

function StartUpRoutes() {
  return (
    <Route element={<PrivateRoute />}>
      <Route
        path="/profile"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <InvestorHome />
          </Suspense>
        }
      />
      <Route
        path="/user/:userId"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <OtherUserProfile />
          </Suspense>
        }
      />
      <Route
        path="/home"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Feed />
          </Suspense>
        }
      />
      <Route
        path="/createpost"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <CreatePost />
          </Suspense>
        }
      />
      <Route
        path="/write-blog"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <WriteBlog />
          </Suspense>
        }
      />
      <Route
        path="/documentation"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Documentation />
          </Suspense>
        }
      />
      <Route
        path="/savePost"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <SavePost />
          </Suspense>
        }
      />
      <Route
        path="/onelink"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <OneLink />
          </Suspense>
        }
      />
      <Route
        path="/onelink/edit"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <OneLinkEditPage />
          </Suspense>
        }
      />
      <Route
        path="/documentation/:route"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <FolderContents />
          </Suspense>
        }
      />
      <Route
        path="/manage-account"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <InvestorManageAccount />
          </Suspense>
        }
      />
      <Route
        path="/team"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Team />
          </Suspense>
        }
      />
      <Route
        path="/customers"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Customer />
          </Suspense>
        }
      />
      <Route
        path="/investors"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Investors />
          </Suspense>
        }
      />
      <Route
        path="/help"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Help />
          </Suspense>
        }
      />
      <Route
        path="/connection"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Connection />
          </Suspense>
        }
      />
      <Route
        path="/search"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Search />
          </Suspense>
        }
      />
      <Route
        path="/support"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Support />
          </Suspense>
        }
      />
      <Route
        path="/messages"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Messages />
          </Suspense>
        }
      />
      <Route
        path="/notifications"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <Notifications />
          </Suspense>
        }
      />
      <Route
        path="/company-profile"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <CompanyProfilePage />
          </Suspense>
        }
      />
      <Route
        path="/company-profile/edit"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <EditCompanyProfilePage />
          </Suspense>
        }
      />
      <Route
        path="/posts/:_id"
        element={
          <Suspense fallback={<p>Loading...</p>}>
            <SinglePost />
          </Suspense>
        }
      />
    </Route>
  );
}

export default StartUpRoutes;
