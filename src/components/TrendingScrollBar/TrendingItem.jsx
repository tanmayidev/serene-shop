import "./TrendingScrollBar.css";
import { useEffect } from "react";

const TrendingItem = ({ img, description, price }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="row-item">
      <div className="item-header">
        <img src={img} alt="product" />
      </div>
      <div className="item-description">
        <p>{description}</p>
        <p className="item-price">{price}</p>
      </div>
    </div>
  );
};

export default TrendingItem;
