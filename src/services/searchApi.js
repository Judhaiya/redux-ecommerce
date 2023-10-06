import  {BASE_API_URL} from "./baseUrl"



export const getUserSearchedProducts = async(payload)=>{
  const {query,token} = payload
  const response = await fetch(`${BASE_API_URL}/auth/products/search?q=${query}`,{
    method:"GET",
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}
