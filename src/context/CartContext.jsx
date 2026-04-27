"use client"
const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext();


const CartContextProvider = ({children})=>{
    //cart state
    const [cart, setCart] = useState(() => {
        if (typeof window !== "undefined") {
          const storedCart = localStorage.getItem("cart");
          return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
      });

    // wishlist state
    const [wishList,setWishList] = useState(()=>{
      if (typeof window !== "undefined") {
        const storedWishList = localStorage.getItem("wishList");
        return storedWishList ? JSON.parse(storedWishList) : [];
      } 
      return [];
    });
    //add to wishlist
    const addProductToWishList =(product)=>{
      setWishList((prevList)=> [...prevList,product]);
      console.log(wishList)
    }
    //remove from wishlist
    const removeFromWishList =(id)=>{
      const updatedWishlist= wishList.filter((wishItem)=>wishItem.id !==id)
      setWishList(updatedWishlist);
    }

    //add to cart functionality
    const addToCartProduct =(product)=>{
        setCart((prevCart)=> [...prevCart,product]);
    }
    //remove cart functionality
    const removeFromCart =(id)=>{
      const updatedCart= cart.filter((cartItem)=>cartItem.id !==id)
      setCart(updatedCart);
    }

    // store cartitem to local storage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
    // store cartitem to local storage
    useEffect(() => {
          localStorage.setItem("wishList", JSON.stringify(wishList));
     }, [wishList]);

    //context value
    const ctxValue={
        cart,
        addToCartProduct,
        removeFromCart,
        addProductToWishList,
        removeFromWishList
    }
    return(
        <CartContext.Provider value={ctxValue}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;