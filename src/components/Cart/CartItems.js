import ItemCart from "../ItemCart/ItemCart";
import "./cart.css";

const CartItems = ({ items, totalPrice, buttonHandle, cleanCart }) => {
  return (
    <div className="cart-items">
      {items.map((product) => {
        return <ItemCart item={product} key={product.id} />;
      })}
      <span>Total ${totalPrice() / 1}</span>
      <div className="buttons">
        <button onClick={buttonHandle}>Continuar compra</button>
        <button onClick={cleanCart}>Vaciar carrito</button>
      </div>
    </div>
  );
};

export default CartItems;
