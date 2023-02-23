import * as Unicons from "@iconscout/react-unicons"; 
import { useContext } from "react";
import { CartContex } from "../../context/CartProvider";
import { Link } from "react-router-dom";
import "./cartwidget.css";

const CartWidget = () => {
  const { totalProducts } = useContext(CartContex);

  return (
    <div className="cartwidget">
      <Link to={"/carrito"}>
       <Unicons.UilShoppingCart color="#fff" /> 
      </Link>
      {totalProducts() !== 0 && (
        <span className="cartwidget-count">{totalProducts()}</span>
      )}
    </div>
  );
};

export default CartWidget;
