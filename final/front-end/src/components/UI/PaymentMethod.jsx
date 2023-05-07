import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import masterCard from "../../assets/all-images/master-card.jpg";
import paypal from "../../assets/all-images/paypal.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {

  // Function to show notification
  const showNotification = () => {
    toast.success('Your order is successfully received. You will be notified in your mail in a few hours.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      
    

     

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
  <button
    className="btn btn-primary d-flex align-items-center gap-2"
    onClick={() => window.location.href = "https://www.paypal.com"}
  >
    <input type="radio" />
    Paypal
  </button>
</div>
      <div className="payment text-end mt-5">
        <button onClick={showNotification}>Reserve Now</button>
      </div>
    </>
  );
};

export default PaymentMethod;