import { useEffect } from "react";
import { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stockValue, onAdd }) => {
  const [contador, setContador] = useState(0);
  const [stock, setStock] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStock(stockValue);
    }, 1000);
  }, [stockValue]);

  const plusItem = () => {
    if (stock > 0) {
      setContador(contador + 1);
      setStock(stock - 1);
    }
  };
  const minusItem = () => {
    if (contador !== 0) {
      setContador(contador - 1);
      setStock(stock + 1);
    }
  };
  const handleValue = (e) => setContador(e.target.value);
  return (
    <>
      <div className="item-count">
        <button onClick={minusItem}>-</button>
        <input
          type="number"
          onChange={handleValue}
          placeholder={contador}
          max={stockValue}
        />
        <button onClick={plusItem}>+</button>
      </div>
      <button onClick={() => onAdd(contador)}>Agregar a carrito</button>
    </>
  );
};

export default ItemCount;
