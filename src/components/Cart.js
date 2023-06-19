import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/CartSlice";
import "../styles.css";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveCart = (item) => {
    dispatch(remove(item));
  };

  return (
    <div className="product">
      <h1>Cart Items</h1>
      {items.map((item) => {
        return (
          <div>
            <img src={item.image} alt="img" />
            <p className="title">{item.title}</p>
            <p className="price">{item.price}</p>
            <button onClick={() => handleRemoveCart(item)}>
              Remove from cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
