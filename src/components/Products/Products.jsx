import ProductItem from "./ProductItem";
import "./Products.css";
import Img1 from "../../images/products/1.jpg";
import Img2 from "../../images/products/2.jpg";
import Img3 from "../../images/products/3.png";
import Img4 from "../../images/products/4.jpg";
import Img5 from "../../images/products/5.jpg";
import Img6 from "../../images/products/6.jpg";
import Img7 from "../../images/products/7.jpg";
import Img8 from "../../images/products/8.jpg";

const Products = () => {
  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Recommended Products</h2>
      <div className="container">
        <div className="products-grid">
          <ProductItem
            img={Img1}
            description="Little Petra VB1 Armchair Sheepskin"
            price="986$"
          />
          <ProductItem
            img={Img2}
            description="Pop-Up Toaster, White, 45cm"
            price="45$"
          />
          <ProductItem
            img={Img3}
            description="Flowerpot VP1 Pendant Light Blue"
            price="254$"
          />
          <ProductItem
            img={Img4}
            description="Pulp Unit - 5 Compartments"
            price="79$"
          />
          <ProductItem
            img={Img5}
            description="Golden Modern Light"
            price="249$"
          />

          <ProductItem
            img={Img6}
            description="Oil Cleansing 200ml"
            price="45$"
          />
          <ProductItem
            img={Img7}
            description="Modern Black and White Lamp"
            price="220$"
          />
          <ProductItem
            img={Img8}
            description="Gejst Nivo Shelf A Black Ash/Black"
            price="115$"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
