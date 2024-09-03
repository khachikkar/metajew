import React from "react";

const Cart = ({ basket, setBasket }) => {
  return (
    <div className="cart">
      <h1>My Cart</h1>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {basket.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td><img src={item.image} alt="pp" /></td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>$ {item.price * item.quantity}</td>
                <td>Actions</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
