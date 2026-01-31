import { useState, useEffect } from "react";

export default function Clock() {
  const [seconds, setSeconds] = useState(30);
  const [isRunning, setIsRunning] = useState(false); // 1. Cái công tắc (false là tắt, true là bật)

  // 2. Thằng useEffect này là một "thằng đệ" ngồi canh cái công tắc
  useEffect(() => {
    if (isRunning && seconds > 0) {
      // Nếu công tắc BẬT và thời gian CÒN
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timer); // Dọn dẹp để không bị loạn số
    }
  }, [isRunning, seconds]); // "Thằng đệ" này sẽ chạy lại mỗi khi công tắc hoặc số giây thay đổi

  return (
    <div style={{ padding: "20px" }}>
      {/* 3. Bấm nút thì chỉ làm duy nhất 1 việc: Bật công tắc lên true */}
      <button onClick={() => setIsRunning(true)}>Bắt đầu đếm ngược</button>

      {/* 4. Hiện số giây ra đây */}
      <h1>Còn lại: {seconds} giây</h1>
    </div>
  );
}
