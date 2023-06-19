import { Link } from "react-router-dom";
import "../styles.css";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <>
      <div className="navbar">
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <span>Items : {items.length}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
