import ProductItem from "./ProductItem";
import "./Products.css";
import { allProducts } from "../Data/AllProductsData";
import { Link } from "react-router-dom";

const Products = () => {
  const recommendedItems = allProducts.filter((item) => item.id <= 8);

  return (
    <div className="products-container">
      <h2 className="container products-h2">Recommended Products</h2>
      <div className="container">
        <div className="products-grid">
          {recommendedItems.map(({ id, img, description, price }) => (
            <Link key={id} to={`/product/${id}`}>
              <ProductItem
                key={id}
                id={id}
                img={img}
                description={description}
                price={price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
