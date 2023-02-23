import "./checkout.css";
import FormCheckout from "./FormCheckout";
import { Link } from "react-router-dom";
import Ticket from "./Ticket";

const Checkout = ({ buyer, setBuyer, handleSubmit, id, reject, restart }) => {
  const changeValueHandler = (e) => {
    const { value, name } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };
  if (id === "" || typeof id === "undefined") {
    return (
      <div className="checkout">
        <h2 className="buyer-title">
          Ingresá tus datos para confirmar la orden de compra
        </h2>
        <FormCheckout
          buyer={buyer}
          handleSubmit={handleSubmit}
          onChange={changeValueHandler}
          reject={reject}
        />
      </div>
    );
  }
  return (
    <div className="checkout">
      <Ticket id={id} />
      <Link to="/productos">
        <button className="rebuy-button" onClick={restart}>Volver a comprar</button>
      </Link>
    </div>
  );
};

export default Checkout;
