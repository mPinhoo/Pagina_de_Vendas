import React, { useState } from "react";

const Product = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{formatCurrency(product.price)}</p>
      <div className="cart-buttons">
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {[...Array(10).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
        <button onClick={() => onAddToCart(product, quantity)}>
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default Product;