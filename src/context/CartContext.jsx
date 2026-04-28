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
    }
    //remove from wishlist
    const removeFromWishList =(id)=>{
      const updatedWishlist= wishList.filter((wishItem)=>wishItem.id !==id)
      setWishList(updatedWishlist);
    }

    //add to cart functionality
    const addToCartProduct = (productId) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find(
          (item) => item.productId === productId
        );
    
        if (existingProduct) {
          return prevCart.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
    
        return [...prevCart, { productId, quantity: 1 }];
      });
    };
    //remove cart functionality
    const removeFromCart =(id)=>{
      const updatedCart= cart.filter((cartItem)=>cartItem.productId !==id)
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