import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({p,addToCartfun}) => {
    let {title,price,rating,thumbnail,id}=p
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col p-3" style={{height:'300px', width:'240px'}}>
                   <Link to={`/productdetails/${id}`}> <img src={thumbnail} alt="" width={200} height={150} /></Link>
                    <b>{title}</b>
                   <div className='d-flex justify-content-around py-2'>
                   <b>${price}</b>
                   <p>{rating}</p>
                   </div>
                    <button className='btn btn-outline-warning'
                    onClick={()=>addToCartfun(p)}
                    >addToCart</button>
                    <button className='btn btn-primary ms-2'>BuyNow</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem
