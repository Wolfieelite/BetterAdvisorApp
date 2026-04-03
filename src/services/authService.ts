const API = "http://localhost:8080/api";

export async function login(username: String, password: String | Number) {
  try {
    const response = await fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
    })

    const data = await response.json();
    return data;

  } catch (e) {
    console.error("Login request failed", e)
    return {
      success: false,
      userType: null,
      fullName: null,
      message: "Could not reach the server... Is the java backend running?"
    }
  }
}
