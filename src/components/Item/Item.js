import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.name}</h3>
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <p>${item.price}</p>
      <Link to={`/producto/${item.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;
