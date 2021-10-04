import axios from 'axios';

export const baseURL = process.env.REACT_APP_API_URL;

const apiHelper = axios.create({baseURL});

apiHelper.interceptors.request.use(
  async (config) => {
    let jwt_user;
    let token;

    try {
      token = await JSON.parse(localStorage.getItem('jwtexpressocode'));
    } catch (error) {
      console.log(error);
    }

    if (token) {
      config.headers.authorization = token;
    }
    return config;
  }
)

export default apiHelper;