import axios from "axios";
const apiUrl = process.export.REACT_APP_API_URL;

export const loginUserToApi = async (user) => {
  const response = await axios.post(`${apiUrl}/auth/login`, user);
  try {
    console.log(response.data);
    if (response.data.user) {
      localStorage.setItem('jwtexpressocode', JSON.stringify(response.data));
      alert("Login successful");
    }
  }  catch (error) {
    console.log(error);
  }
  return response;
}

export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwtexpressocode')) {
    return JSON.parse(localStorage.getItem('jwtexpressocode'));
  }
  return false;
}

export const logOut = async () => {
  await localStorage.removeItem('jwtexpressocode');
  alert("Logged Out Successfully");
}