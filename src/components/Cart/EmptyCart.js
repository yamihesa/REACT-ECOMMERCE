import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="cart-message">
      <p>No has agregado productos al carrito</p>
      <Link to={"/productos"}>Ir a Productos</Link>
    </div>
  );
};

export default EmptyCart;
