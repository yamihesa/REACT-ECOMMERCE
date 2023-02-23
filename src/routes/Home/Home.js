import React from 'react'
import Products from '../Products/Products'
import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>Bienvenidos!</h1>
      <h2>“Cada vez que comes, tienes una oportunidad de cambiar tu organismo”</h2>
      <Products />
    </div>
  )
}

export default Home