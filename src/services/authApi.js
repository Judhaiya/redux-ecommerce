export const LOGIN_API_URL = "https://dummyjson.com/auth/login"
export const loginApi = async (payload) => {
    const response = await fetch(LOGIN_API_URL,{
        method:"post",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(payload),
        expiresInHours:10
    });
    return await response.json();
}
