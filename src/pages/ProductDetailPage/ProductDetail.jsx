import { useState } from "react";
import { allProducts } from "../../components/Data/AllProductsData";
import TrendingScrollBar from "../../components/TrendingScrollBar/TrendingScrollBar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import "./ProductDetail.css";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const item = allProducts.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item[0].img);

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
    return quantity * item[0].price;
  };

  return (
    <>
      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-big-name">{item[0].description}</h3>
            <div className="product-left">
              <div className="big-img">
                <img src={image} alt="product" />
              </div>
              <div className="small-imgs">
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                />
                {item[0].otherImgs.map((otherImage) => (
                  <img
                    onMouseOver={changeImage}
                    src={otherImage}
                    alt="product"
                  />
                ))}
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
                <p className="product-price">{calcPrice(quantity)}.00$</p>
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
