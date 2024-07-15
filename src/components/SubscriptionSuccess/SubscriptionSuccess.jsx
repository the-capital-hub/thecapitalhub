import React, { useEffect, useState } from "react";
import "./subscriptionSuccess.scss";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { getSubscriptionUrl } from "../../Service/user";

const SubscriptionSuccess = () => {
  const [popPaySuccessOpen,setPopPaySuccessOpen] = useState(false)
  useEffect(()=>{
    const getPaymentStatus = async ()=>{
      try{
        const response = await getSubscriptionUrl()
        console.log(response)
      }catch(err){
        throw err
      }
    }
    getPaymentStatus()
  })
  const handleCloseBar = ()=>{
    try{

    }catch(err){
      console.log(err)
    }
  }
  return (
 <>
      {popPaySuccessOpen && (
        <div className="subscriber-background-overlay"></div>
      )}
      <div
        className={`payment_post_modal rounded-4 p-md-2 ${
          popPaySuccessOpen ? "d-block" : ""
        }`}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="subscriber_modal-header w-80">
              <div className="createpostpopup"></div>
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
              <div className="payment_success_plans">
                {/* test  */}

                <div className="payment-success">
                  <div className="icon-container">
                    <FaCheckCircle className="icon" />
                  </div>
                  <h2 className="headSuccess">Payment Success!</h2>
                  <p>Your payment has been successfully done.</p>
                  <hr />
                  <div className="detail-total">
                    <span>Total Payment</span>
                    <br />
                    <strong>₹ 1,000,000</strong>
                  </div>
                  <div className="payment-details">
                    <div className="detail-item">
                      <div className="detail-head">
                        <span>Ref Number</span>
                      </div>
                      <div className="detail-value">
                        <strong>000085752257</strong>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-head">
                        <span>Payment Time</span>
                      </div>
                      <div className="detail-value">
                        <strong>25/02/2023, 13:22</strong>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-head">
                        <span>Payment Method</span>
                      </div>
                      <div className="detail-value">
                        <strong>Razorpay</strong>
                      </div>
                    </div>
                    <div className="detail-item">
                      <div className="detail-head">
                        <span>Sender Name</span>
                      </div>
                      <div className="detail-value">
                        <strong>Balaji</strong>
                      </div>
                    </div>
                  </div>

                  <button className="pdf-button">
                    <AiOutlineCloudDownload size={"1.8rem"} /> Get PDF Receipt
                  </button>
                </div>

                {/* test ends  */}
              </div>
            </div>
            <button onClick={handleCloseBar} className="done_button">
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubscriptionSuccess