import ProductItem from "./ProductItem";
import "./Products.css";
import { items } from "../Data/ProductData";

const Products = () => {
  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Recommended Products</h2>
      <div className="container">
        <div className="products-grid">
          {items.map(({ id, img, description, price }) => (
            <ProductItem
              key={id}
              img={img}
              description={description}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
