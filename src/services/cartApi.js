import { BASE_API_URL } from "./baseUrl"

export const  getCartItemsApi = async(token)=>{
  const response = await fetch(`${BASE_API_URL}/auth/carts/1`,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`, 
      'Content-Type': 'application/json'
    }, 
  })
   return await response.json()
  
}

export const addCartItemApi = async(token,payload)=>{
    const response = await fetch(`${BASE_API_URL}/auth/carts/add`,{
        method:'POST',
        headers:{
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(payload)
    })
    return await response.json()
}

export const deleteCartItemsApi = async(token,id)=> {
  const response = await fetch(`${BASE_API_URL}/auth/carts/${id}`,{
    method:"DELETE",
    headers:{
        'Authorization': `Bearer ${token}`, 
    },
  }) 
  return await response.json()
} 