const PRODUCTS_API_URL = "https://dummyjson.com/auth/products"

export const getProductsApi = async (token)=>{
  const response = await fetch(PRODUCTS_API_URL, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    }, 
  })
  return await response.json()
}