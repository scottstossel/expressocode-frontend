import { createContext, useEffect, useState } from "react";
import apiHelper from "../helpers/apiHelper";

export const AuthContext = createContext([]);

const AuthProvider = ({children}) => {
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
    img: '',
    google: false,
    facebook: false,
  })

  useEffect(() => {
    isAdmin();
    checkLogged();
    getAllUsers();
  }, [])

  const getAllUsers = async (user) => {
    const response = await apiHelper.get('/user');
    setUsers(response.data);
  }

  const loginUser = async (user) => {
    const response = await apiHelper.post('/user/login', user);
    const { data } = response;
    console.log(data);
    setUser(data.user);
    localStorage.setItem('jwtexpressocode', JSON.stringify({user: data.user, token: data.token}));
    setLoggedIn(true);
    isAdmin();
  }

  const checkLogged = () => {
    const tokenValue = localStorage.getItem('jwtexpressocode');
    return tokenValue ? setLoggedIn(true) : setLoggedIn(false);
  }

  const isAdmin = () => {
    const token = JSON.parse(localStorage.getItem('jwtexpressocode'));
    console.log("USER", token);
  }

  const logOutUser = () => {
    localStorage.removeItem('jwtexpressocode');
    setLoggedIn(false);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        setUser,
        loggedIn,
        loginUser,
        logOutUser
      }}
      >
        {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider;