import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../Store/features/design/designSlice";
import { getInvestorById } from "../../../Service/user";
import {
  selectIsInvestor,
  selectUserCompanyData,
  selectUserInvestor,
} from "../../../Store/features/user/userSlice";
import investment from "../../../Images/Investor/CompanyProfile/image 83-6.png";
import investment1 from "../../../Images/Investor/CompanyProfile/image 83-5.png";
import { CiEdit } from "react-icons/ci";

const Investment = ({ canEdit }) => {
  const theme = useSelector(selectTheme);
  const userInvestor = useSelector(selectUserInvestor);
  const isInvestor = useSelector(selectIsInvestor);
  const userCompanyData = useSelector(selectUserCompanyData);
  const [edit, setEdit] = useState("");
  const [investor, setInvestor] = useState({});
  const [companyData, setCompanyData] = useState({
    age: "",
  });
  useEffect(() => {
    if (isInvestor && !userCompanyData) {
      //setLoading(true);
      getInvestorById(userInvestor)
        .then(({ data }) => {
          setCompanyData(data);
          //setLoading(false);
        })
        .catch((error) => {
          console.log(error.message);
          //setLoading(false);
        })
        .finally(() => {
          //setLoading(false);
        });
    } else {
      setCompanyData(userCompanyData);
    }
  }, [isInvestor, userInvestor, userCompanyData]);
  function formatNumber(value) {
    if (value >= 10000000) {
      // Greater than or equal to 1 Crore
      return (value / 10000000).toFixed(2) + " Crore";
    } else if (value >= 100000) {
      // Greater than or equal to 1 Lakh
      return (value / 100000).toFixed(2) + " Lakh";
    } else if (value >= 1000) {
      // Greater than or equal to 1 Thousand
      return (value / 1000).toFixed(2) + " K";
    }
    return value.toString(); // Less than 1 Thousand
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          background: theme === "dark" ? "#22262c" : "#f5f5f5",
          padding: "10px",
          borderRadius: "0.37rem",
          maxwidth: "25rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "2px solid rgba(211, 243, 107, 1)",
            marginBottom: "5px",
          }}
        >
          <p
            className="typography"
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              marginBottom: "5px",

              color: theme === "dark" ? "#fff" : "#000",
            }}
          >
            Recent Investment
          </p>
          {canEdit && (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (edit === "recent") {
                  setEdit("");
                } else {
                  setEdit("recent");
                }
              }}
            >
              <CiEdit
                style={{
                  color: theme !== "startup" ? "rgb(211, 243, 107)" : "#ffb27d",
                }}
              />
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {canEdit && edit === "recent" ? (
            <input value={userCompanyData?.revenue[userCompanyData?.revenue.length - 1]
              ?.amount}/>
          ) : (
            <p
              // style={{
              //   background: " rgba(211, 243, 107, 1)",
              //   borderRadius: "5px",
              //   color: "#000",
              //   padding: "5px 10px",
              // }}
              style={{
                color: theme === "dark" ? "#fff" : "#000",
                marginBottom: "0",
              }}
            >
              {
                userCompanyData?.revenue[userCompanyData?.revenue.length - 1]
                  ?.amount|| "NA"
              }
            </p>
          )}
        </div>
      </div>
      <div
        style={{
          background: theme === "dark" ? "#22262c" : "#f5f5f5",
          padding: "10px",
          borderRadius: "0.37rem",
          maxwidth: "25rem",
          width: "100%",
          margin: "0 5px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "2px solid rgba(211, 243, 107, 1)",
            marginBottom: "5px",
          }}
        >
          <p
            className="typography"
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              marginBottom: "5px",
              color: theme === "dark" ? "#fff" : "#000",
            }}
          >
            Average Recent Investments
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            // style={{
            //   background: " rgba(211, 243, 107, 1)",
            //   borderRadius: "5px",
            //   color: "#000",
            //   padding: "5px 10px",
            // }}
            style={{
              color: theme === "dark" ? "#fff" : "#000",
              marginBottom: "0",
            }}
          >
            {userCompanyData?.maximumInvest && userCompanyData?.minimumInvest?formatNumber(
              (userCompanyData?.maximumInvest + userCompanyData?.minimumInvest) /
                2
            ):"NA"}
          </p>
        </div>
      </div>
      <div
        style={{
          background: theme === "dark" ? "#22262c" : "#f5f5f5",
          padding: "10px",
          borderRadius: "0.37rem",
          maxwidth: "25rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "2px solid rgba(211, 243, 107, 1)",
            marginBottom: "5px",
          }}
        >
          <p
            className="typography"
            style={{
              fontWeight: "bold",
              fontSize: "12px",
              marginBottom: "5px",
              color: theme === "dark" ? "#fff" : "#000",
            }}
          >
            Avg Age of Startup
          </p>
          {canEdit && (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                if (edit === "age") {
                  setEdit("");
                } else {
                  setEdit("age");
                }
              }}
            >
              <CiEdit
                style={{
                  color: theme !== "startup" ? "rgb(211, 243, 107)" : "#ffb27d",
                }}
              />
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {canEdit && edit === "age" ? (
            <input value={userCompanyData?.age}/>
          ) : (
            <p
              // style={{
              //   background: " rgba(211, 243, 107, 1)",
              //   borderRadius: "5px",
              //   color: "#000",
              //   padding: "5px 10px",
              // }}
              style={{
                color: theme === "dark" ? "#fff" : "#000",
                marginBottom: "0",
              }}
            >
             {userCompanyData?.age? `Age ${userCompanyData?.age}`:"NA"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Investment;
