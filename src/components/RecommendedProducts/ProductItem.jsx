import { useEffect } from "react";

const ProductItem = ({ img, description, price }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="product normal">
        <div className="product-header">
          <img src={img} alt="product" />
        </div>
        <div className="product-details">
          <p>{description}</p>
          <p className="item-price">{price}$</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
