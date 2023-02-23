import './item-cart.css'
import { useContext } from 'react'
import { CartContex } from '../../context/CartProvider'

const ItemCart = ({item}) => {
  const { removeItem } = useContext(CartContex)
  return (
    <div className='item-cart'>
      <img src={item.img} alt={item.name} />
      <div className='item-cart-info'>
        <div>
          <p>Producto</p>
          <p>{item.name}</p>
        </div>
        <div>
          <p>Cantidad </p>
          <p>{item.quantity}</p>
        </div>
        <div>
          <p>Precio</p>
          <p>${item.price}</p>
        </div>
        <div>
          <p>Subtotal</p>
          <p>${item.quantity * item.price / 1}</p>
        </div>
        <button onClick={() => removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default ItemCart