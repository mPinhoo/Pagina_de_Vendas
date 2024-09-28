import React from "react";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>{formatCurrency(item.price)}</p>
      <div className="cart-buttons">
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
          min="1"
        />
        <button onClick={() => onRemoveFromCart(item)}>Remover</button>
      </div>
    </div>
  );
};

export default CartItem;
