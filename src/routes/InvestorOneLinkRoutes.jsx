import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import SuspenseLoader from "../components/SuspenseLoader/SuspenseLoader";

const InvestorOneLinkProfile = lazy(() =>
  import(
    "../pages/InvestorOneLink/InvestorOneLinkProfile/InvestorOneLinkProfile"
  )
);
const InvestorOneLinkStartups = lazy(() =>
  import(
    "../pages/InvestorOneLink/InvestorOneLinkStartups/InvestorOneLinkStartups"
  )
);
const InvestorOneLinkInvestment = lazy(() =>
  import(
    "../pages/InvestorOneLink/InvestorOneLinkInvestment/InvestorOneLinkInvestment"
  )
);
const InvestorOneLinkAppointment = lazy(() =>
  import(
    "../pages/InvestorOneLink/InvestorOneLinkAppointment/InvestorOneLinkAppointment"
  )
);

export default function InvestorOneLinkRoutes() {
  return (
    <>
      <Route
        path=""
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <InvestorOneLinkProfile />
          </Suspense>
        }
      />

      <Route
        path="startups-invested"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <InvestorOneLinkStartups />
          </Suspense>
        }
      />

      <Route
        path="investment-philosophy"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <InvestorOneLinkInvestment />
          </Suspense>
        }
      />

      <Route
        path="appointment"
        element={
          <Suspense fallback={<SuspenseLoader />}>
            <InvestorOneLinkAppointment />
          </Suspense>
        }
      />
    </>
  );
}
