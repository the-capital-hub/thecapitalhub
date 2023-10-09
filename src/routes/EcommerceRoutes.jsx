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
      />
      <Route
        path="nike"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <NikeLandingPage />
          </Suspense>
        }
      />
      <Route
        path="f-tech"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <FtechLandingPage />
          </Suspense>
        }
      />
      <Route
        path="transport"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <TransportLandingPage />
          </Suspense>
        }
      />
    </>
  );
}

export default EcommerceRoutes;