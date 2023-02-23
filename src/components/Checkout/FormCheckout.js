import { useState } from "react";
import "./checkout.css";
import InputGroup from "./InputGroup";

const FormCheckout = ({ handleSubmit, buyer, onChange, reject }) => {
  const [confirmEmail, setConfirmEmail] = useState("");
  const { name, email, phone, address } = buyer;
  const handleConfirmEmail = (e) => {
    setConfirmEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="cart-buyer">
      <InputGroup
        type="text"
        name="name"
        label={"Nombre"}
        value={name}
        onChange={onChange}
      />
      <InputGroup
        type="number"
        name="phone"
        label={"Número"}
        value={phone}
        onChange={onChange}
      />
      <InputGroup
        type="email"
        name="email"
        label={"Email"}
        value={email}
        onChange={onChange}
      />
      <InputGroup
        type="email"
        name="email"
        label={"Confirmar Email"}
        value={confirmEmail}
        onChange={handleConfirmEmail}
      />
      <InputGroup
        type="address"
        name="address"
        label={"Dirección"}
        value={address}
        onChange={onChange}
      />
      <div className="form-buttons">
        <button onClick={reject}>Volver</button>
        {name !== "" &&
          phone !== "" &&
          email !== "" &&
          address !== "" &&
          email === confirmEmail && <button>Finalizar compra</button>}
      </div>
    </form>
  );
};

export default FormCheckout;
