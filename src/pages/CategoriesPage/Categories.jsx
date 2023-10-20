import "./Categories.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter/Newsletter";
import CategoryItems from "../../components/Categories/CategoryItems";

const Categories = () => {
  const filterCategory = (event) => {
    console.log(event.target.value);
    // TODO: All filter logic
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <Link to="/">
            <i className="fa-solid fa-angle-left"></i> Home
          </Link>
          <h3>all</h3>

          <select name="category" onChange={filterCategory}>
            <option value="all">All</option>
            <option value="forniture">Furniture</option>
            <option value="electronics">Electronics</option>
            <option value="lamps">Lamps</option>
            <option value="kitchen">Kitchen</option>
            <option value="chairs">Chairs</option>
            <option value="skin-care">Skin Care</option>
          </select>
        </div>
      </div>

      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            <CategoryItems />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Categories;
