import React, { useState } from "react";

const AccountChecking = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOn, setIsOn] = useState(false);
  let message = null;
  if (password.length < 6) {
    message = <p style={{ color: "red" }}>Mật khẩu quá ngắn!</p>;
  } else {
    message = <p style={{ color: "green" }}>Tài khoản hợp lệ!</p>;
  }

  return (
    <div>
      <h2>Check Account Password</h2>
      <input
        placeholder="Tên đăng nhập..."
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <p></p>
      <input
        placeholder="Mật khẩu..."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <p></p>
      <button onClick={() => setIsOn(true)}>Kiểm tra</button>
      {isOn &&  message }
    </div>
  );
};

export default AccountChecking;
