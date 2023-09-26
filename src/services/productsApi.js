import { BASE_API_URL } from "./baseUrl"

export const getProductsApi = async (token)=>{
  const response = await fetch(`${BASE_API_URL}/auth/products`, {
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
  const response = await fetch(`${BASE_API_URL}/auth/products/${id}`,{
    method:"GET",
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    }, 
  })
  return await response.json()
}