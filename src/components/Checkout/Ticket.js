import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

const Ticket = ({ id }) => {
  const [order, setOrder] = useState({});
  const [isOrder, setIsOrder] = useState(false)
  useEffect(() => {
    const db = getFirestore();
    const orderRef = doc(db, "orders", id);
    getDoc(orderRef).then((snapshot) => {
      if (snapshot.exists()) {
        setOrder({ id: snapshot.id, ...snapshot.data() });
        setIsOrder(true)
      }
    });
  }, [id]);

  return (
    <div className="checkout-ticket">
      <h2>Felicidades!, ya tenés tu orden de compra!</h2>
      <h3>
        Gracias {order?.buyer?.name} por tu compra, a continuación tenés tu
        orden de compra:
      </h3>
      <div className="ticket">
        <div className="ticket-navbar">
          <h4>Tienda Holistica</h4>
          <p>Orden N°: {order?.id}</p>
        </div>
        <div className="ticket-buyer">
          <ul>
            <li>Nombre: {order?.buyer?.name}</li>
            <li>Email: {order?.buyer?.email}</li>
            <li>Teléfono: {order?.buyer?.phone}</li>
            <li>Dirección: {order?.buyer?.address}</li>
          </ul>
        </div>
        <hr />
        <div className="ticket-description">
          <h4>Descripción</h4>
          <div className="description-grid">
            <div>
              <p>Producto</p>
              <p>Cantidad </p>
              <p>Precio</p>
              <p>SubTotal</p>
            </div>
            {isOrder && order?.items.map((item) => {
              return (
                <div key={item.id}>
                  <p>{item?.name}</p>
                  <p>{item?.quantity}</p>
                  <p>${item?.precio}</p>
                  <p>${(item?.quantity * item?.precio) / 1}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ticket-total">
          <p>
            Total: $
            {isOrder && order?.items.reduce(
              (acc, current) => acc + current?.quantity * current?.price,
              0
            ) / 10}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
