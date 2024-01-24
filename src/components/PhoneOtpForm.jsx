import React, { useState } from "react";
import OtpInput from "./OtpInput";

function PhoneOtpForm() {
  const [phoneNum, setPhoneNum] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNum(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    //phone validation
    const regex = /[^0-9]/g;
    if (phoneNum.length < 10 || regex.test(phoneNum)) {
      alert("Invalid Phone Number");
      return;
    }

    // API CALL
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("login successful", otp);
  }

  return (
    <div>
      {showOtpInput == false ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phoneNum}
            onChange={handlePhoneNumber}
            placeholder="Enter your number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h3>Enter OTP sent on {phoneNum}</h3>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
}

export default PhoneOtpForm;
