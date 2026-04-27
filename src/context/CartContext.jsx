"use client"
const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext();


const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState(() => {
        if (typeof window !== "undefined") {
          const storedCart = localStorage.getItem("cart");
          return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
      });

    const addToCartProduct =(product)=>{
        setCart((prevCart)=> [...prevCart,product]);
    }

    const removeFromCart =(id)=>{
      const updatedCart= cart.filter((cartItem)=>cartItem.id !==id)
      setCart(updatedCart);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    const ctxValue={
        cart,
        addToCartProduct,
        removeFromCart
    }
    return(
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;