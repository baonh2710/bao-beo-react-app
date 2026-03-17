import React, { useState } from "react";

const LightSwitch = () => {
  const [isOn, setIsOn] = useState(true);
  const Toogle = () => {
    setIsOn(!isOn);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>LightSwitch</h2>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: isOn ? "khaki" : "gray",
          borderRadius: "100%",
        }}
      ></div>
      <p>Đèn đang {isOn ? "BẬT" : "TẮT"}</p>
      <button onClick={() => Toogle()}>Toogle Light Switch</button>
    </div>
  );
};

export default LightSwitch;
