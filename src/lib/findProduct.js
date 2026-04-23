export const findProduct= async(id)=> {
    const product = await fetch(`https://dummyjson.com/products/${id}`,
        {cache:"no-store"}
    );
    return product.json()
}