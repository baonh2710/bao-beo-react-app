import { useState } from "react";

function FontSizeChanger() {
  const [fontSize, setFontSize] = useState(16);

  return (
    <div>
      <p style={{ fontSize: fontSize + "px" }}>
        Chào mừng bạn đến với React!
      </p>
	  <p>Cỡ chữ hiện tại là {fontSize} px</p>
      <button onClick={() => setFontSize(fontSize + 2)}>Tăng font size</button>
      <button onClick={() => setFontSize(fontSize - 2)}>Giảm font size</button>
      <button onClick={() => setFontSize(16)}>Reset font size</button>
    </div>
  );
}

export default FontSizeChanger;
