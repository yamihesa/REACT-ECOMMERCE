import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../ItemDetails/ItemDetails";
import { ClipLoader } from "react-spinners";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore()

    const itemRef = doc(db, 'products', id)
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem({ id: snapshot.id, ...snapshot.data()})
        setLoading(false)
      }
    })
    
  }, [id]);
  return (
    <>
      {loading ? (
        <div style={{width: '400px', margin: '50px auto', textAlign: 'center'}}>
          <ClipLoader color="#ffffff" />
        </div>
      ) : (
        <ItemDetails item={item} />
      )}
    </>
  );
};

export default ItemDetailContainer;
