import CategoryItems from "./CategoryItems";

const CategoriesBody = ({ filteredProducts }) => {
  return (
    <div className="categories-container">
      <div className="container">
        <div className="categories-grid">
          <CategoryItems filteredProducts={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default CategoriesBody;
