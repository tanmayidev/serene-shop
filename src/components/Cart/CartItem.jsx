import Img2 from "../../images/products/2.jpg";
import { useState } from "react";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={Img2} alt="product" />
      </div>
      <div className="cart-middle">
        <p className="cart-name">Toaster</p>
        <div className="cart-btns">
          <button onClick={decrease}>-</button>
          <p className="quantity">{quantity}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">100.00$</p>
        <i className="fa-sharp fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default CartItem;
