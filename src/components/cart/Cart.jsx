import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'
import { useDispatch, useSelector } from 'react-redux'
import { action2 } from '../../redux/actionCreator'

const Cart = () => {

    // let {cart,setCart}=useContext(CartContext)
    let cart=useSelector((s)=>s.addCart)
    let dispatch=useDispatch()

    let cartData=()=>{
        axios.get('http://localhost:3000/addToCart')
        // .then((res)=>{setCart(()=>res.data,console.log(res.data))})
    }

    useEffect(() => {
       
          cartData();
       
      }, []);
      
    // let deleteCartitem=(id)=>{
    //     axios.delete(`http://localhost:3000/addToCart/${id}`)
    //     .then((res)=>console.log(res.data))
    //     cartData()

    // }
    // let deleteCartitem = async (id,i) => {
    //    try{ await axios.delete(`http://localhost:3000/addToCart/${id}`);
    //      dispatch(action2(i))
    //     cartData();
    // }
    // catch
    //    {
    //     console.log('Error DeleteData')
    // }
    //   };

      let deleteCartitem=(id,i)=>{
        axios.delete(`http://localhost:3000/addToCart/${id}`)
        dispatch(action2(i))
        cartData()
      }
      
  return (
    <div className='bg-dark'>
      <h4 className='text-info text-center'>My-cart </h4>
      <div className="container">

        {
           cart&& cart.length>0? cart.map((c,i)=>{
                let {title,thumbnail,rating,price,id}=c
                return (
                    <div className="row border py-2 w-75 my-2" key={i}>
                        <div className="col">
                            <img src={thumbnail} alt="" height={80} width={90} />
                        </div>
                        <div className="col">
                            <p>{title}</p>
                        </div>
                        <div className="col">
                            <b>{price}</b>
                        </div>
                        <div className="col">
                            <p>{rating}</p>
                        </div>
                        <div className="col">
                            <button onClick={()=>deleteCartitem(id,i)} className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                )
            }):
            <div className='text-center mt-5'>
                <FontAwesomeIcon icon ={faCartShopping} className='display-1 text-secondary'/>    
                <h1 className='text-warning display-4 mt-4 text-center fw-bolder'>No cart item here</h1>
            </div>
        }

      </div>
    </div>
  )
}

export default Cart
