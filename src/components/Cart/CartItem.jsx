import Img2 from "../../images/products/2.jpg";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-img">
        <img src={Img2} alt="product" />
      </div>
      <div className="cart-middle">
        <p className="cart-name">Toaster</p>
        <div className="cart-btns">
          <button>-</button>
          <p className="quantity">1</p>
          <button>+</button>
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
