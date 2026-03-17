import React, { useState } from "react";

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Điện tử");

  const removeProduct = (idToRemove) => {
    setProducts((prev) => prev.filter((product) => product.id !== idToRemove));
  };

  const addProduct = () => {
    if (name.trim() === "") {
      alert("Vui lòng nhập tên sản phẩm!");
      return;
    }
    const newProduct = {
      id: Date.now(),
      name: name,
      category: category,
    };
    setProducts((prev) => [...prev, newProduct]);
    setName("");
  };

  const productsList = products.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>
        <button
          onClick={() => removeProduct(product.id)}
          style={{ color: "red" }}
        >
          Xoá
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <h2>Product Manager</h2>

      <input
        placeholder="Tên sản phẩm..."
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      ></input>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Điện tử">Điện tử</option>
        <option value="Thời trang">Thời trang</option>
        <option value="Gia dụng">Gia dụng</option>
      </select>

      <button onClick={addProduct}>Thêm</button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>{productsList}</tbody>
      </table>
      {products.length === 0 && <p>Chưa có sản phẩm nào!</p>}
    </div>
  );
};

export default ProductManager;
