import { createContext, useState } from "react";

let CartContext=createContext()

let CartProvider=({children})=>{
  let [cart,setCart]=useState([])

  return (
    <CartContext.Provider value={{cart,setCart}}>
        {children}
    </CartContext.Provider>
  )
}
export {CartContext,CartProvider}