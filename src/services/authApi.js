import { BASE_API_URL } from "./baseUrl";

export const loginApi = async (payload) => {
    const response = await fetch(`${BASE_API_URL}/auth/login`,{
        method:"post",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(payload),
        expiresInHours:10
    });
    return await response.json();
}
