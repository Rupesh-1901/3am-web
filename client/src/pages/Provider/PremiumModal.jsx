import React, { useState } from "react";
import Payment from "./payment"; // Import the Payment modal
import "./Premium.css";

const Premium = ({ isOpen, onClose }) => {
  const [selectedPlan, setSelectedPlan] = useState("Yearly");
  const [isPaymentOpen, setPaymentOpen] = useState(false); // State to control payment modal visibility

  if (!isOpen) return null;

  // Function to handle plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  // Function to open payment modal
  const handleChoosePlan = () => {
    setPaymentOpen(true); // Open the payment modal
  };

  return (
    <div className="premium-modal-overlay">
      <div className="premium-modal">
        <h2 className="modal-heading">Choose a Package</h2>
        <p className="modal-description">Select by choosing a plan</p>
        <div className="premium-options">
          {/* Weekly Plan */}
          <div
            className={`premium-option ${
              selectedPlan === "Weekly" ? "selected-plan" : ""
            }`}
            onClick={() => handlePlanSelect("Weekly")}
          >
            <h3
              className={`option-title ${
                selectedPlan === "Weekly"
                  ? "selected-title"
                  : "unselected-title"
              }`}
            >
              Weekly
            </h3>
            <p className="option-price">€12.99/user</p>
            <hr className="option-divider" />
            <button className="choose-plan-button" onClick={handleChoosePlan}>
              Choose a Plan →
            </button>
          </div>

          {/* Yearly Plan */}
          <div
            className={`premium-option ${
              selectedPlan === "Yearly" ? "selected-plan" : ""
            }`}
            onClick={() => handlePlanSelect("Yearly")}
          >
            <div className="discount-badge">-30%</div>
            <h3
              className={`option-title ${
                selectedPlan === "Yearly"
                  ? "selected-title"
                  : "unselected-title"
              }`}
            >
              Yearly
            </h3>
            <p className="option-price">€399.99/user</p>
            <hr className="option-divider" />
            <button className="choose-plan-button" onClick={handleChoosePlan}>
              Choose a Plan →
            </button>
          </div>

          {/* Monthly Plan */}
          <div
            className={`premium-option ${
              selectedPlan === "Monthly" ? "selected-plan" : ""
            }`}
            onClick={() => handlePlanSelect("Monthly")}
          >
            <h3
              className={`option-title ${
                selectedPlan === "Monthly"
                  ? "selected-title"
                  : "unselected-title"
              }`}
            >
              Monthly
            </h3>
            <p className="option-price">€39.99/user</p>
            <hr className="option-divider" />
            <button className="choose-plan-button" onClick={handleChoosePlan}>
              Choose a Plan →
            </button>
          </div>
        </div>
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>

      {/* Payment Modal */}
      <Payment isOpen={isPaymentOpen} onClose={() => setPaymentOpen(false)} />
    </div>
  );
};

export default Premium;
