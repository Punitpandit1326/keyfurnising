import React, { useState } from "react";
import "./step.css";
import { FaCheck } from "react-icons/fa6";
const steps = [
  {
    title: "Order Confirmed",
    date: "Apr 10, 2024",
    details: [
      "Your Order Has been placed",
      "Your Item has been picked up by Courier Partner",
    ],
  },
  {
    title: "Shipped",
    date: "",
    details: [],
  },
  {
    title: "Out For Delivery",
    date: "",
    details: [],
  },
  {
    title: "Delivered",
    date: "",
    details: [],
  },
];

const Step = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <div key={index} className="step-container">
          <div
            className={`step-marker ${index <= activeStep ? "active" : ""}`}
            onClick={() => handleStepClick(index)}
          >
            {index <= activeStep ? (
              <div className="check-icon">
                <FaCheck size={14} style={{ marginTop: "-4px" }} />
              </div>
            ) : (
              <div className="circle-icon"></div>
            )}
          </div>
          <div className="step-content">
            <h3>{step.title}</h3>
            {step.date && <p className="step-date">{step.date}</p>}
            {step.details.map((detail, i) => (
              <p key={i} className="step-detail">
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step;
