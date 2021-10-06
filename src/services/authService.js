import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const loginUserToApi = async (user) => {


  try {
    const response = await axios.post(`${apiUrl}/user/login`, user);
    const { data } = response;
    console.log(response.data);
    if (response.data.user) {
      localStorage.setItem('jwtexpressocode', JSON.stringify({user: data.user, token: data.token}));
      alert("Login successful");
    }
    return response;
  }  catch (error) {
    console.log(error);
  }
}

export const signUpUserToApi = async (user) => {
  const response = await axios.post(`${apiUrl}/user/signup`, user);
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