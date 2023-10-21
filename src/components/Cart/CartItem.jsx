import { useContext } from "react";
import { CartContext, calculateTotalPrice } from "../../contexts/CartContext";

const CartItem = ({ product }) => {
  const [, dispatch] = useContext(CartContext);
  console.log("product", product);

  const increase = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  const decrease = () => {
    if (product.quantity > 1) {
      dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: -1 } });
    }
  };

  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={product.img} alt="product" />
      </div>
      <div className="cart-middle">
        <p className="cart-name">{product.name}</p>
        <div className="cart-btns">
          <button onClick={decrease}>-</button>
          <p className="quantity">{product.quantity}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">{product.price}$</p>
        <i className="fa-sharp fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default CartItem;
