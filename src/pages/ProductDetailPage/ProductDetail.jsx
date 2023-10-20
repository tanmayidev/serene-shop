import { useState } from "react";
import { allProducts } from "../../components/Data/AllProductsData";
import TrendingScrollBar from "../../components/TrendingScrollBar/TrendingScrollBar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import "./ProductDetail.css";

const ProductDetail = () => {
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
    <>
      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">Chair Sheepskin</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={allProducts[0].img} alt="product" />
              </div>
              <div className="small-imgs">
                <img src={allProducts[0].img} alt="product" />
                <img src={allProducts[0].otherImgs[0]} alt="product" />
                <img src={allProducts[0].otherImgs[1]} alt="product" />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">{allProducts[0].specs}</p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <p className="product-price">{allProducts[0].price}.00$</p>
              </div>
              <div className="atc-buy">
                <button className="atc-btn">add to cart</button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>

          <div className="specifications">
            <div className="spec">
              <p className="spec-title">Texture:</p>
              <p className="title-desc">Sheep Skin</p>
            </div>
            <div className="spec">
              <p className="spec-title">Weight:</p>
              <p className="title-desc">15.3kg</p>
            </div>
            <div className="spec">
              <p className="spec-title">Size:</p>
              <p className="title-desc">90cm * 80cm * 120cm</p>
            </div>
          </div>
        </div>
        <TrendingScrollBar />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};
export default ProductDetail;
