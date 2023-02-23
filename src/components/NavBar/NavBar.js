import "./navbar.css";
import { Link } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import CartWidget from "../CartWidget/CartWidget";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection).then((snapshot) => {
      setCategories(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">COHERENCIA CUANTICA</Link>
      </div>
      <ul className="navbar-options">
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        {categories.map((category) => {
          return <li key={category.id}>
            <Link to={`/productos/${category.name.split(' ').join('-')}`}>{category.name}</Link>
          </li>
        })}
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
