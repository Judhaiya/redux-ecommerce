import { BASE_API_URL } from "./baseUrl";

export const loginApi = async (payload) => {
  const response = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    expiresInMins: 2
  });
  return await response.json();
};

export const getCartItemsApi = async (token) => {
  const response = await fetch(`${BASE_API_URL}/auth/carts/1`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  return await response.json();
};

export const addCartItemApi = async (token, payload) => {
  const response = await fetch(`${BASE_API_URL}/auth/carts/add`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return await response.json();
};

export const deleteCartItemsApi = async (token, id) => {
  const response = await fetch(`${BASE_API_URL}/auth/carts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return await response.json();
};
export const getProductsApi = async (token) => {
  const response = await fetch(`${BASE_API_URL}/auth/products`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (response.status > 400) throw new Error("session expired")
  return await response.json();
};
export const getSingleProductApi = async (payload) => {
  const { id, token } = payload;
  const response = await fetch(`${BASE_API_URL}/auth/products/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  return await response.json();
};

export const getUserSearchedProducts = async (payload) => {
  const { query, token } = payload;
  const response = await fetch(
    `${BASE_API_URL}/auth/products/search?q=${query}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }
  );
  return await response.json();
};
