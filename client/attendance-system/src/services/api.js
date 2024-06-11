import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/authenticate`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      throw new Error("Invalid username or password");
    } else {
      throw new Error(
        "There was a problem connecting to the server. Please try again later."
      );
    }
  }
};
