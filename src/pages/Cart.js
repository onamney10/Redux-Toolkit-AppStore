import React from 'react'
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { remove } from '../store/Cartslice';


const Cart = () => {

  
const dispatch = useDispatch();

const p = useSelector(state=>state.cart);

const removehandler=(pro)=>{
  dispatch(remove(pro))
}




return (
    <div>
      <h3>Cart</h3>
      <div >
        {
        p.map((pro)=>{

          return <div className='cartCard' key={pro.id}>
            <img src={pro.image} alt=""/>
            <h5>{pro.title}</h5>
            <h5>{pro.price}</h5>
            <button onClick={()=>{removehandler(pro.id)}} className='btn'>Remove</button>
          </div>

        
        }
        )}

      </div>
      
      
    </div>
  )
}

export default Cart
