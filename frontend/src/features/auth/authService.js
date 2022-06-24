// authService - to make HTTP requests and sending data back and sending any data from local storage
import axios from "axios";

const API_URL = "/api/users/";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    //request made with axios will return data in response's 'data'
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData); // '/api/users/login"

  if (response.data) {
    //request made with axios will return data in response's 'data'
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

//Logout user
const logout = () => {
  localStorage.removeItem("user");
};

//below to export the required functions
const authService = {
  register,
  logout,
  login,
};

export default authService;
