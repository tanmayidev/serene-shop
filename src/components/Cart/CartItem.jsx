import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ product }) => {
  const [, dispatch] = useContext(CartContext);

  const increase = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  const decrease = () => {
    if (product.quantity > 1) {
      dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: -1 } });
    }
  };

  const removeItem = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product.id });
  };

  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={product.img} alt="product" />
      </div>
      <div className="cart-middle">
        <p className="cart-name">{product.description}</p>
        <div className="cart-btns">
          <button onClick={decrease}>-</button>
          <p className="quantity">{product.quantity}</p>
          <button onClick={increase}>+</button>
        </div>
      </div>
      <div className="cart-right">
        <p className="cart-price">{product.price}$</p>
        <FontAwesomeIcon onClick={removeItem} icon={faX} />
      </div>
    </div>
  );
};

export default CartItem;
