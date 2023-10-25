import { BASE_API_URL } from "./baseUrl";
import { unauthorisedError, badRequest } from "../utilities/customError";

/**
 *
 * @param {Object} payload
 * @returns json response
 * make post request to login user ,sends user entered email,password
 * if post request fails for invalid credentials,it will throw badRequest error("invalid credentials")
 * BASE_API_URL url of api
 */

export const loginApi = async (payload) => {
  const response = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (response.status === 400) throw badRequest("invalid credentials");
  return await response.json();
};

/**
 *
 * @param {string} token
 * @returns json response
 * make get request for fetching items added to the cart ,sends token  in the headers object in the authorization key
 * if get request fails for invalid token or no token found unauthorized error will be thrown
 * BASE_API_URL url of api
 */

export const getCartItemsApi = async (token) => {
  const response = await fetch(`${BASE_API_URL}/auth/carts/1`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  if (response.status > 400) {
    throw unauthorisedError();
  }
  return await response.json();
};

/**
 * @param {string} token
 * @param {Object} payload
 * @returns json response
 * make post request to add item to the cart,sends token in the headers object in the authorization key
 *  invalid token or no token found, get request failed, unauthorized error will be thrown
 * BASE_API_URL url of api
 */
export const addCartItemApi = async (token, payload) => {
  const response = await fetch(`${BASE_API_URL}/auth/carts/add`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  if (response.status > 400) {
    throw unauthorisedError();
  }
  return await response.json();
};

/**
 *
 * @param {string} token
 * @param {string} id
 * @returns json response
 * make delete request to delete items in the cart,sends token in the authorization headers object in the authorization key
 * invalid token or no token found, delete request failed, unauthorized error will be thrown
 *  BASE_API_URL url of api
 */
export const deleteCartItemsApi = async (token, id) => {
  const response = await fetch(`${BASE_API_URL}/auth/carts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return await response.json();
};

/**
 *
 * @param {string} token
 * @returns json response
 * makes get request for all the products,sends token in the authorization headers object in the authorization key
 *  reponse status code greater than 400,unauthorized error will be thrown
 *  BASE_API_URL url of api
 */
export const getProductsApi = async (token) => {
  const response = await fetch(`${BASE_API_URL}/auth/products`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (response.status > 400) {
    throw unauthorisedError();
  }
  return await response.json();
};

/**
 *
 * @param {Object} payload
 * payload -id,token
 * id - string
 * token - string
 * @returns json response
 * makes get request for the single product based on id specified,sends token in the authorization headers object in the authorization key
 * reponse status code greater than 400,unauthorized error will be thrown
 *  BASE_API_URL url of api
 */

export const getSingleProductApi = async (payload) => {
  const { id, token } = payload;
  const response = await fetch(`${BASE_API_URL}/auth/products/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });
  if (response.status > 400) {
    throw unauthorisedError();
  }
  return await response.json();
};

/**
 *
 * @param {Object} payload
 * payload - query,token
 * query - string
 * token - string
 * @returns json response
 * makes get request for products queryed by user,sends token in the authorization headers object in the authorization key
 * reponse status code greater than 400,unauthorized error will be thrown
 *  BASE_API_URL url of api
 */

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
  if (response.status > 400) {
    throw unauthorisedError();
  }
  return await response.json();
};
