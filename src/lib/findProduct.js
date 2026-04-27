export const findProduct= async(id)=> {
    const product = await fetch(`https://dummyjson.com/products/${id}`,
        {
            next: {revalidate:60},
        }
    );
    return product.json()
}