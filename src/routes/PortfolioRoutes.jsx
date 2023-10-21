import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import SuspenseLoader from "../components/SuspenseLoader/SuspenseLoader";
const PortfolioPage = lazy(() =>
  import("../webDevelopment/pages/PortfolioPage/PortfolioPage")
);
function PortfolioRoutes() {
  return (
    <>
    <Route
      path="portfolio"
      element={
        <Suspense fallback={<SuspenseLoader />}>
            <PortfolioPage/>
        </Suspense>
      }
    />
  </>
  )
}

export default PortfolioRoutes