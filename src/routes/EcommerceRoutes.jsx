import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import SuspenseLoader from "../components/SuspenseLoader/SuspenseLoader";

const FoodLandingPage = lazy(() =>
  import("../eCommerace/pages/LandingPage/FoodLandingPage/FoodLandingPage")
);
const FtechLandingPage = lazy(() =>
  import("../eCommerace/pages/LandingPage/FtechLandingPage/FtechLandingPage")
);
const NikeLandingPage = lazy(() =>
  import("../eCommerace/pages/LandingPage/NikeLandingPage/NikeLandingPage")
);
const TransportLandingPage = lazy(() =>
  import(
    "../eCommerace/pages/LandingPage/TransportLandingPage/TransportLandingPage"
  )
);

function EcommerceRoutes() {
  return (
    <>
      <Route
        path="food"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <FoodLandingPage />
          </Suspense>
        }
      ></Route>
      <Route
        path="nike"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <NikeLandingPage />
          </Suspense>
        }
      />
      <Route
        path="fintech"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <FtechLandingPage />
          </Suspense>
        }
      ></Route>
      <Route
        path="logistics"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <TransportLandingPage />
          </Suspense>
        }
      ></Route>
    </>
  );
}

export default EcommerceRoutes;
