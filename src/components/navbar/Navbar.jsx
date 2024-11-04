import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../cart/CartContext';
import { useSelector } from 'react-redux';
const Navbar = () => {
    // let { cart } = useContext(CartContext)
    // const [cartLength, setCartLength] = useState(cart.length);
    let cart=useSelector((s)=>s.addCart)

    // useEffect(() => {
    //   setCartLength(cart.length);
    // }, [cart]);
  
  
    return (
        <div>
            <nav style={{ height: '50px' }} className='d-flex justify-content-around align-items-center border bg-dark'>
                <div className="logo">
                    <h5>AddToCart-Json-Server</h5>
                </div>
                <div className="nav-cont d-flex gap-3 align-items-center h-100">
                    <Link to={'/'}> <p>home</p></Link>
                    <Link to={'/product'}> <p>pruduct</p></Link>
                    <Link to={'/cart'}>
                        <div className='mt-2 position-relative'><FontAwesomeIcon icon={faCartShopping} />
                            <h5 className=' text-warning rounded-circle p-2 fw-bolder position-absolute top-0 ps-5 end-0  ' style={{ height: '16px', width: '16px', fontSize: '14px', marginTop: '-1.3rem' }}>
                                
                            {cart.length}

                                </h5>

                              
                        </div></Link>
                    <p>login</p>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
