import { Link } from "react-router-dom";

const CategoriesHeader = () => {
  const filterCategory = (event) => {
    console.log(event.target.value);
    // TODO: All filter logic
  };

  return (
    <div className="container">
      <div className="catego-header">
        <Link to="/">
          <i className="fa-solid fa-angle-left"></i> Home
        </Link>
        <h3>all</h3>

        <select name="category" onChange={filterCategory}>
          <option value="all">All</option>
          <option value="furniture">Furniture</option>
          <option value="electronics">Electronics</option>
          <option value="lamps">Lamps</option>
          <option value="kitchen">Kitchen</option>
          <option value="chairs">Chairs</option>
          <option value="skin-care">Skin Care</option>
        </select>
      </div>
    </div>
  );
};
export default CategoriesHeader;
