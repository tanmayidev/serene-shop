import ProductItem from "../RecommendedProducts/ProductItem";
import { Link } from "react-router-dom";

const CategoryItems = ({ filteredProducts }) => {
  return (
    <>
      {filteredProducts.map(({ id, img, description, price }) => (
        <Link to={`/categories/product/${id}`}>
          <ProductItem
            key={id}
            img={img}
            description={description}
            price={price}
          />
        </Link>
      ))}
    </>
  );
};

export default CategoryItems;
