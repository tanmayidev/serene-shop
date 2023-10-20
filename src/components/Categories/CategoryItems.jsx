import ProductItem from "../Products/ProductItem";

const CategoryItems = ({ filteredProducts }) => {
  return (
    <>
      {filteredProducts.map(({ id, img, description, price }) => (
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
