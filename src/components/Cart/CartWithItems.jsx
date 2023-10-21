import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartWithItems = () => {
  const [cartState, dispatch] = useContext(CartContext);
  const { items, totalPrice } = cartState;

  useEffect(() => {}, [items]);

  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {items.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">{totalPrice}$</p>
        </div>
        <div className="sub-left">
          <Link>Go to Checkout</Link>
        </div>
      </div>
    </>
  );
};

export default CartWithItems;
