import React from 'react'
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const items = useSelector((state)=>state.cart);
  

  return (
    <div style={{display:"flex",
    flexDirection:"row",

     alignItems:"center",
     justifyContent:"space-between"}}>

      <span className='logo'>Redux Store</span>
      <div>
        <Link  className="navLink"   to="/">Home</Link>
        <Link to="/cart" className='navLink'>Cart</Link>
        <span className='cartCount'>CartItems: {items.length}</span>
      </div>
      
    </div>
  )
}

export default Navbar

