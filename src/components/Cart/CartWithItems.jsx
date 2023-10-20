import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const CartWithItems = () => {
  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">1000$</p>
        </div>
        <div className="sub-left">
          <Link>Go to Checkout</Link>
        </div>
      </div>
    </>
  );
};

export default CartWithItems;
