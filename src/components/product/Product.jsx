import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductItem from '../pruductItem/ProductItem'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { action1 } from '../../redux/actionCreator';
import { useDispatch } from 'react-redux';
const Product = () => {

    let [state, setState] = useState([])
    let dispatch=useDispatch()
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((res) => setState(()=>res.data))
            .catch((err) => alert('datagetting error', err))
    }, [])

    let addToCartfun = (data) => {
        axios.post(`http://localhost:3000/addToCart`, data)
        .then((res)=>{
            dispatch(action1(res.data))
        })
            toast.success('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: Bounce,
                });

    }
    return (
        <div className='bg-dark'>
            <h1>product-component</h1>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                // transition:Bounce
/>
            <div className="container d-flex justify-content-evenly flex-wrap">
                {
                    state.length > 0 ? state.map((s, i) => {
                        return (
                            <div className="row" key={i}>
                                <div className="col">
                                    <ProductItem p={s} addToCartfun={addToCartfun} />
                                </div>
                            </div>
                        )

                    }) :
                        <h2 className='text-danger text-center'>no product somthing is error</h2>
                }
            </div>
        </div>
    )
}

export default Product
