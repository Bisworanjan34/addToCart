import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    let {id}=useParams()
    let [pdetails,setPdetails]=useState({})
    let {title,price,rating,description,thumbnail}=pdetails
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`)
        .then((res)=>setPdetails(res.data))
        .catch((er)=>alert('err data fetching',er))

    },[])
  return (
    <div className='bg-dark '>
      <div className="container">
        <div className="row justify-content-center border p-3 mx-auto" style={{width:'400px'}}>
            <div className="col">
                <img src={thumbnail} alt="" width={300} height={250} className='rounded' />
                <h5 className='py-1'>{title}</h5>
                <p>{description}</p>
                <div className='d-flex gap-4'>
                    <h5>
                        ${price}</h5>
                    <p> {rating}</p>
                </div>

                <button className='btn btn-danger'>AddtoCart</button>
                <button className='btn btn-primary ms-3'>BuyNow</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
