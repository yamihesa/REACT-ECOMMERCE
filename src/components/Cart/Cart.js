import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContex } from "../../context/CartProvider";
import { ClipLoader } from "react-spinners";
import "./cart.css";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import Checkout from "../Checkout/Checkout";

const Cart = () => {
  const { cart, totalPrice, clear } = useContext(CartContex);
  const [confirmProducts, setConfirmProducts] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const navigate = useNavigate();

  const order = {
    buyer: buyer,
    items: cart,
    total: totalPrice(),
  };

  const processBuyer = () => {
    setConfirmProducts(true);
  };

  const rejectCheckout = (e) => {
    e.preventDefault();
    setConfirmProducts(false);
    navigate(-1);
  };
  const restart = () => {
    setConfirmProducts(false);
    setOrderId("");
  };
  const buyHandle = () => {
    setIsLoading(true)
    const db = getFirestore();
    const orderCollections = collection(db, "orders");
    addDoc(orderCollections, order).then((snapshot) => {
      setOrderId(snapshot.id);
      setIsLoading(false)
    });
    clear();
  };

  if (isLoading) {
    return (
      <div style={{ width: "400px", margin: "50px auto", textAlign: "center" }}>
        <ClipLoader color="#ffffff" />
      </div>
    );
  }

  if (cart.length === 0 && orderId === "") {
    return <EmptyCart />;
  }

  if (!confirmProducts) {
    return (
      <CartItems
        items={cart}
        totalPrice={totalPrice}
        buttonHandle={processBuyer}
        cleanCart={clear}
      />
    );
  }

  return (
    <div className="cart">
      <Checkout
        buyer={buyer}
        setBuyer={setBuyer}
        handleSubmit={buyHandle}
        id={orderId}
        reject={rejectCheckout}
        restart={restart}
      />
    </div>
  );
};

export default Cart;
