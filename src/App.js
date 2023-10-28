import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Categories from "./pages/CategoriesPage/Categories";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./pages/ProductDetailPage/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/serene-shop" element={<Home />} />
        <Route path="/serene-shop/categories" element={<Categories />} />
        <Route path="/serene-shop/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
