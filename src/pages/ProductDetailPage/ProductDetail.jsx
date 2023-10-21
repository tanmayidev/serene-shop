import { useState, useEffect, useContext } from "react";
import { allProducts } from "../../components/Data/AllProductsData";
import TrendingScrollBar from "../../components/TrendingScrollBar/TrendingScrollBar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import "./ProductDetail.css";
import { useParams } from "react-router";
import { CartContext } from "../../contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null); // Use state to store the item

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(null);

  const [, dispatch] = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    const selectedItem = allProducts.find(
      (product) => product.id === parseInt(id)
    );
    if (selectedItem) {
      setQuantity(1);
      setItem(selectedItem);
      setImage(selectedItem.img);
    }
  }, [id]);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity } });
  };

  const changeImage = (e) => {
    setImage(e.target.src);
  };

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

  const calcPrice = (quantity) => {
    return item ? quantity * item.price : 0;
  };

  return (
    <>
      {item && (
        <div className="product-page-div">
          <div className="container">
            <div className="product-div">
              <h3 className="product-big-name">{item.description}</h3>
              <div className="product-left">
                <div className="big-img">
                  <img src={image} alt="product" />
                </div>
                <div className="small-imgs">
                  <img onMouseOver={changeImage} src={item.img} alt="product" />
                  <img
                    onMouseOver={changeImage}
                    src={item.otherImgs[0]}
                    alt="product"
                  />
                  <img
                    onMouseOver={changeImage}
                    src={item.otherImgs[1]}
                    alt="product"
                  />
                </div>
              </div>
              <div className="product-right">
                <p className="product-spec">{item.specs}</p>
                <div className="product-quant">
                  <p>Quantity</p>
                  <div className="product-btns">
                    <button onClick={decrease}>-</button>
                    <p className="quantity">{quantity}</p>
                    <button onClick={increase}>+</button>
                  </div>
                  <p className="product-price">{calcPrice(quantity)}.00$</p>
                </div>
                <div className="atc-buy">
                  <button className="atc-btn" onClick={addToCart}>
                    add to cart
                  </button>
                  <button className="buy-btn">buy now</button>
                </div>
              </div>
            </div>

            <div className="specifications">
              <div className="spec">
                <p className="spec-title">Texture:</p>
                <p className="title-desc">{item.texture}</p>
              </div>
              <div className="spec">
                <p className="spec-title">Weight:</p>
                <p className="title-desc">{item.weight}</p>
              </div>
              <div className="spec">
                <p className="spec-title">Size:</p>
                <p className="title-desc">{item.size}</p>
              </div>
            </div>
          </div>
          <TrendingScrollBar />
          <Newsletter />
          <Footer />
        </div>
      )}
    </>
  );
};
export default ProductDetail;
