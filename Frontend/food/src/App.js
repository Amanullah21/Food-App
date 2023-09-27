import Login from "./Auth/Login";
import Sign from "./Auth/Sign";
// import About from "./Page/About";
import "./Style/Globel.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./Page/About";
import Payment from "./Page/Payment";
import TableLogin from "./Auth/TableLogin";
import OwnerDashboard from "./Page/OwnerDashboard";
import AddProduct from "./Page/AddProduct";
import AddProductMenu from "./Page/AddProductMenu";
import AddBuyProduct from "./Page/AddBuyProduct";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/table-login" element={<TableLogin />} />
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-product-menu" element={<AddProductMenu />} />
        <Route path="/add-buy-product" element={<AddBuyProduct />} />
      </Routes>
    </div>
  );
}

export default App;
