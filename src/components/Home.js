import { useEffect } from "react";
import { add } from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, STATUS } from "../redux/ProductSlice";
import "../styles.css";
const Home = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const handleAddCart = (product) => {
    dispatch(add(product));
  };

  if (status === STATUS.LOADING) {
    return <h1>Loding...</h1>;
  }
  if (status === STATUS.ERROR) {
    return <h1>Please refresh or check your internet connection </h1>;
  }

  return (
    <>
      <div className="products">
        {products.map((product) => {
          return (
            <div>
              <img src={product.image} alt="img" />
              <p className="title">{product.title}</p>
              <p className="price">{product.price}</p>
              <button onClick={() => handleAddCart(product)}>
                Add To cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
