import { Suspense, lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import SuspenseLoader from "../components/SuspenseLoader/SuspenseLoader";

const InvestorConnection = lazy(() =>
  import("../components/NewInvestor/InvestorConnection/InvestorConnection")
);
const OtherInvestorProfile = lazy(() =>
  import("../pages/Investor/OtherInvestorProfile/OtherInvestorProfile")
);
const InvestorCompanyProfilePage = lazy(() =>
  import(
    "../pages/Investor/InvestorCompanyProfilePage/InvestorCompanyProfilePage"
  )
);
const EditInvestorCompanyProfilePage = lazy(() =>
  import(
    "../pages/Investor/InvestorCompanyProfilePage/EditInvestorCompanyProfilePage"
  )
);
const InvestorHomeFeed = lazy(() => import("../pages/Investor/Home/Home"));
const NewInvestorManageAccount = lazy(() =>
  import(
    "../components/NewInvestor/InvestorManageAccount/NewInvestorManageAccount"
  )
);
const SavedPosts = lazy(() =>
  import("../pages/Investor/SavedPosts/SavedPosts")
);
const MySchedule = lazy(() =>
  import("../pages/Investor/MySchedule/MySchedule")
);
const SearchResults = lazy(() =>
  import("../pages/Investor/SearchResults/SearchResults")
);
const LiveDeals = lazy(() => import("../pages/Investor/LiveDeals/LiveDeals"));
const Syndicates = lazy(() =>
  import("../pages/Investor/Syndicates/Syndicates")
);
const Explore = lazy(() => import("../pages/Investor/Explore/Explore"));
const InvestorProfile = lazy(() => import("../pages/Investor/Profile/Profile"));
const MyStartUp = lazy(() => import("../pages/Investor/MyStartUp/MyStartUp"));

function InvestorRoutes() {
  return (
    <>
      <Route index element={<Navigate to="profile" replace />} />
      <Route
        path="home"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <InvestorHomeFeed />
          </Suspense>
        }
      />
      <Route
        path="profile"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <InvestorProfile />
          </Suspense>
        }
      />
      <Route
        path="manage-account"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <NewInvestorManageAccount />
          </Suspense>
        }
      />
      <Route
        path="mystartups"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <MyStartUp />
          </Suspense>
        }
      />
      <Route
        path="explore"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Explore />
          </Suspense>
        }
      />
      <Route
        path="syndicates"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <Syndicates />
          </Suspense>
        }
      />
      <Route
        path="live-deals"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <LiveDeals />
          </Suspense>
        }
      />
      <Route
        path="search"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <SearchResults />
          </Suspense>
        }
      />
      <Route
        path="my-schedule"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <MySchedule />
          </Suspense>
        }
      />
      <Route
        path="saved-posts"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <SavedPosts />
          </Suspense>
        }
      />
      <Route
        path="connection"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <InvestorConnection />
          </Suspense>
        }
      />
      <Route
        path="company-profile"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <EditInvestorCompanyProfilePage />
          </Suspense>
        }
      />
      <Route
        path="company-profile/:username"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <InvestorCompanyProfilePage />
          </Suspense>
        }
      />
      <Route
        path="user/:userId"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <OtherInvestorProfile />
          </Suspense>
        }
      />
    </>
  );
}

export default InvestorRoutes;
