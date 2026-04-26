"use client"
const { createContext, useState } = require("react");

export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [cart,SetCart] = useState([]);

    const ctxValue={
        cart,
        SetCart
    }
    return(
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;