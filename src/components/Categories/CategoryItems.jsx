import { allProducts } from "../Data/AllProductsData";
import ProductItem from "../Products/ProductItem";

const CategoryItems = () => {
  return (
    <>
      {allProducts.map(({ id, img, description, price }) => (
        <ProductItem
          key={id}
          img={img}
          description={description}
          price={price}
        />
      ))}
    </>
  );
};

export default CategoryItems;
