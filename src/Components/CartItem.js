import { useState } from "react";

function CartItem() {
  const [quantity, setQuantity] = useState(1);
  const price = 500000;
  const total = quantity * price;

  return (
    <div>
      <h3>Product name</h3>
      <p>Price for each piece: {price.toLocaleString()} VND</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
        <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {quantity}
        </span>
        <button
          onClick={() => {
            quantity > 1
              ? setQuantity(quantity - 1)
              : alert("Quantity can't be less than 1");
          }}
        >
          -
        </button>
      </div>
      {total >= 2000000 && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          You get free shipping
        </p>
      )}
      <p>Total amount = {total.toLocaleString()} VND</p>
    </div>
  );
}

export default CartItem;
