import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../store/Cartslice'; 
import { fetchproducts } from '../store/Productslice';
import { STATUSES } from '../store/Productslice';



const Products = () => {
  const {data:products,status} = useSelector((state)=>state.product);
  const dispatch = useDispatch();

   useEffect(()=>{

    dispatch(fetchproducts());
        // const fetchproducts =async ()=>{
        //   const res = await fetch("https://fakestoreapi.com/products");
        //   const data = await res.json();
        //   setproducts(data);

        // }
        // fetchproducts();
},[]);
const handleAdd=(product)=>{
  dispatch(add(product));

}
if(status == STATUSES.LOADING){
  return <h2>loading....</h2>
}



return (
    <div className='productsWrapper '>
      {
        products.map((pro)=>{
           return <div className='card' key={pro.id}>
            <img src={pro.image} alt=""/>
            <h4>{pro.title}</h4>
            <h5>{pro.price}</h5>
            <button onClick={()=>{
              handleAdd(pro)
            }} className='btn'>add to cart</button>
          </div>
        })
      }
      
    </div>
  )
}

export default Products
