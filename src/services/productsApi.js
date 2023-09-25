const PRODUCTS_API_URL = "https://dummyjson.com/auth/products";


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
export const getSingleProductApi = async(payload)=>{
  const {id,token} = payload;
  const response = await fetch(`${PRODUCTS_API_URL}/${id}`,{
    method:"GET",
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    }, 
  })
  return await response.json()
}