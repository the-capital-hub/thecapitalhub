import React, { useState } from "react";
import "./subscriptionPop.scss";
import { CiCircleCheck } from "react-icons/ci";
import { subscription } from "./data";
import { subscribe } from "../../../Service/user";
import { useNavigate } from "react-router-dom";
import { load } from "@cashfreepayments/cashfree-js";
//import { Cashfree } from "cashfree-pg";
//import { useSelector } from "react-redux";

const SubcriptionPop = ({ popPayOpen, setPopPayOpen }) => {
  //const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [orderId, setOrderId] = useState("");
  let cashfree;

  let insitialzeSDK = async () => {
    cashfree = await load({
      mode: "sandbox",
    });
  };
  insitialzeSDK();
  //const navigate = useNavigate();
  const handleCloseBar = () => {
    setPopPayOpen(false);
  };

  const handelPurchase = async (item) => {
    try {
      const res = await subscribe(item);
      console.log(res)
      if (res) {
        setOrderId(res.order_id);
        //res.data.payment_session_id
        let checkOutOptions = {
          paymentSessionId: res.payment_session_id,
          redirectTrarget: "_modal",
        };
        cashfree.checkout(checkOutOptions).then(()=>{
          console.log("Payment Success")
        }).catch(error=>{
          console.log(error)
        })
        // Cashfree.checkout(
        //   {
        //     token: res.data.authLink, // Pass the payment link from your backend
        //     onSuccess: (data) => {
        //       console.log(data)
        //       // Handle successful payment
        //     },
        //     onError: (error) => {
        //       // Handle payment error
        //     },
        //   },
        //   "cc" // Specify payment mode (cc for credit card)
        // );
        //navigate("/payment/success")
      }
    } catch (err) {}
  };
  return (
    <>
      {popPayOpen && (
        <div
          className="subscriber-background-overlay"
          onClick={() => setPopPayOpen(false)}
        ></div>
      )}
      <div
        className={`subscriber_post_modal rounded-4 p-md-2 ${
          popPayOpen ? "d-block" : ""
        }`}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="subscriber_modal-header w-80">
              <div className="createpostpopup">
                <div className="subscription_head">
                  <span>
                    <h2 style={{ border: "none" }}>
                      Simple and Affordable <br /> Pricing Plans
                    </h2>
                    <h6>
                      Choose your subscription plan that’s suits you and your
                      business best.
                    </h6>
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="closebar d-flex justify-content-end"
                onClick={handleCloseBar}
                style={{ background: "transparent", border: "none" }}
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="pricing_plans">
                {subscription.map((item, index) => (
                  <div
                    className="plan basic"
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <h3 className="headingContent">
                        {item.subscriptionType}
                      </h3>
                      <p className="price">
                        ₹{item.price} <span>/month</span>
                      </p>
                      <p
                        className="description"
                        style={{
                          border: "none",
                          marginBottom: 0,
                          fontSize: "12px",
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                    <hr />

                    <div className="features" style={{ height: "70%" }}>
                      {item.features.map((i, j) => (
                        <p
                          key={j}
                          style={{ marginBottom: 0, fontSize: "13px" }}
                        >
                          <CiCircleCheck /> {i}
                        </p>
                      ))}
                    </div>
                    <button
                      className="purchase_button"
                      onClick={() => {
                        handelPurchase(item);
                      }}
                    >
                      Purchase Now
                    </button>
                  </div>
                ))}
              </div>
              <button className="upgrade_button">Upgrade Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubcriptionPop;

// <div className="plan pro">
//   <h3 className="headingContent" style={{ color: "#adff2f" }}>
//     Pro
//   </h3>
//   <p className="price">
//     ₹10,000<span>/month</span>
//   </p>
//   <p className="description">
//     Step up your game with our Pro Plan designed for those who
//     demand more from their experience.
//   </p>
//   <hr />
//   <div className="features">
//     <p>
//       <CiCircleCheck color="#adff2f" /> Unlimited eSignature
//     </p>
//     <p>
//       <CiCircleCheck color="#adff2f" /> Custom Fields
//     </p>
//     <p>
//       <CiCircleCheck color="#adff2f" /> Strong Security
//     </p>
//     <p>
//       <CiCircleCheck color="#adff2f" /> Client Intake Management
//     </p>
//   </div>
//   <button className="purchase_button">Purchase Now</button>
// </div>
// <div className="plan advance">
//   <h3 className="headingContent" style={{ color: "#adff2f" }}>
//     Advance
//   </h3>
//   <p className="price">
//     ₹20,000<span>/month</span>
//   </p>
//   <p className="description">
//     The Advance plan is the pinnacle of our offerings,
//     meticulously curated for those who demand excellence in
//     every aspect.
//   </p>
//   <hr />

//   <div className="features">
//     <p>
//       <CiCircleCheck /> Everything in Basic & Pro
//     </p>
//     <p>
//       <CiCircleCheck /> Advanced Document
//     </p>
//     <p>
//       <CiCircleCheck /> Advance Security
//     </p>
//   </div>
//   <button className="purchase_button" onClick={()=>{
//     setSubscriptionData({
//       description:""
//     })
//   }}>Purchase Now</button>
// </div>
