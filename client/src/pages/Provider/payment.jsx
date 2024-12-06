import React from "react";
import "./Payment.css";
import visa from "../../assets/visa.svg";
import NetBanking from "../../assets/NetBanking.svg";

const Payment = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="payment-modal-overlay">
      <div className="payment-modal">
        <h2 className="payment-heading">Enter Payment Details</h2>
        <p className="payment-description">Select by choosing a plan now</p>

        {/* Payment Method: Bank Cards */}
        <div className="payment-method">
          <label className="radio-container">
            <input type="radio" name="payment-method" defaultChecked />
            <span className="radio-checkmark" />
            <p className="Bank">Bank Cards</p>
          </label>
          <div className="payment-symbols">
            <img src={visa} alt="Visa" className="payment-icon1" />
            {/* <img src="mnp.png" alt="MNP" className="payment-icon" /> */}
          </div>
        </div>

        {/* Card Details */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Card Number"
            className="input-field"
          />
          <div className="input-icon card-icon" />
        </div>

        {/* Month and CVV Fields in Horizontal Layout */}
        <div className="input-container">
          <div className="row">
            <input
              type="text"
              placeholder="MM/YY"
              className="input-field short-field"
            />
            <input
              type="text"
              placeholder="CVV"
              className="input-field short-field"
            />
          </div>
        </div>

        {/* Security Note */}
        <p className="security-note">
          Data is protected under the PCI DSS standard. We do not store your
          data and do not share it with the merchant.
        </p>

        {/* Pay Button */}
        <button className="pay-button">Pay</button>

        {/* Net Banking Payment Method */}
        <div className="payment-method">
          <label className="radio-container">
            <input type="radio" name="payment-method" />
            <span className="radio-checkmark" />
            <p className="Bank">Net Banking</p>
          </label>
          <div className="payment-symbols">
            <img src={NetBanking} alt="Bank 1" className="payment-icon" />
            {/* <img src="bank2.png" alt="Bank 2" className="payment-icon" /> */}
          </div>
        </div>
        <p className="payment-description">
          Convenient method of payment using bank website
        </p>

        {/* Order Details */}
        <div className="order-details">
          <h3 className="order-heading">Select a Payment Method:</h3>
          <div className="order-box">
            <div className="order-number">Order #1646988613_694623663</div>
            <div className="order-summary">
              <div className="order-price">$69</div>
              <div className="order-description">
                Description
                <p className="order-info">Order description</p>
              </div>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Payment;
