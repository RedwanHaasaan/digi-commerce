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
    const [wishList, setWishList] = useState(() => {
      if (typeof window !== "undefined") {
        const storedWishList = localStorage.getItem("wishList");
        const parsed = storedWishList ? JSON.parse(storedWishList) : [];
    
        // 🔥 clean corrupted data
        return parsed.filter((item) => item?.productId);
      }
      return [];
    });
    //add to wishlist
    const addProductToWishList = (productId) => {
      // 🔥 guard against invalid values
      if (!productId || typeof productId !== "number") {
        console.error("Invalid productId:", productId);
        return;
      }
      setWishList((prevList) => {
        const alreadyExists = prevList.some(
          (item) => item.productId === productId
        );
    
        if (alreadyExists) return prevList;
    
        return [...prevList, { productId }];
      });
    };
    //remove from wishlist
    const removeFromWishList = (productId) => {
      setWishList((prevList) =>
        prevList.filter((item) => item.productId !== productId)
      );
    };

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
    //update cart functionality
    const updateQuantity = (productId, newQty) => {
      setCart((prevCart) => {
        // guard: invalid quantity
        if (newQty <= 0) {
          return prevCart.filter(
            (item) => item.productId !== productId
          );
        }
    
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: newQty }
            : item
        );
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
        wishList,
        addToCartProduct,
        removeFromCart,
        updateQuantity,
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