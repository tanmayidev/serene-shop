import { Link } from "react-router-dom";
import ProductItem from "../RecommendedProducts/ProductItem";

const CategoriesBody = ({ filteredProducts }) => {
  return (
    <div className="categories-container">
      <div className="container">
        <div className="categories-grid">
          {filteredProducts.map(({ id, img, description, price }) => (
            <Link key={id} to={`/serene-shop/product/${id}`}>
              <ProductItem
                key={id}
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

export default CategoriesBody;
