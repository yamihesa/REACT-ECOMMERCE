import "./itemlistcontainer.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { ClipLoader } from "react-spinners";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const {category}  = useParams()
  
  useEffect(() => {
    setLoading(true)
    const db = getFirestore()
    const itemsCollection = collection(db, 'products')

    if (typeof category !== 'undefined') {
      
      const q = query(itemsCollection, where('category', '==', category.split('-').join(' ')))

      getDocs(q).then(snapshot => {
        const items = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data()
        }))
        setItems(items)
        setLoading(false)  
      })        
    } else {
      getDocs(itemsCollection).then(snapshot => {
        const items = snapshot.docs.map((item) => ({
          id: item.id,
          ...item.data()
        }))
        setItems(items)
        setLoading(false)
      })  
    }
  }, [category]);

  return (
    <div className="item-list-container">
      {loading ? (
        <div
          style={{ width: "400px", margin: "50px auto", textAlign: "center" }}
        >
          <ClipLoader color="#ffffff" />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
