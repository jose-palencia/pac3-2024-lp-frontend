import axios from "axios";
import { useAuthStore } from "../../features/security/store/useAuthStore";

const API_URL = "https://localhost:7191/api";
axios.defaults.baseURL = API_URL;

const setAuthToken = () => {
  const auth = getAuth();
  if (auth) {
    blogApi.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;
  } else {
    delete blogApi.defaults.headers.common["Authorization"];
  }
};

const getAuth = () => {
  const lsToken = localStorage.getItem("token");
  const lsRefreshToken = localStorage.getItem("refreshToken");

  if (lsToken && lsRefreshToken) {
    return { token: lsToken, refreshToken: lsRefreshToken };
  }
  return null;
};

setAuthToken();

let refreshingTokenPromise = null;

const blogApi = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

blogApi.interceptors.response.use(
  (config) => config,
  (error) => {
    const auth = getAuth();

    if (
      error.response &&
      error.response.status === 401 &&
      auth &&
      !refreshingTokenPromise
    ) {
      refreshingTokenPromise = blogApi.post(
        "auth/refresh-token",
        {
          token: auth.token,
          refreshToken: auth.refreshToken,
        },
        {
          withCredentials: true,
        }
      ).then((response) => {
        const setSession = useAuthStore.getState().setSession;
        const user = {
          email: response.data.data.email,
          fullName: response.data.data.fullName,
          tokenExpiration : response.data.data.tokenExpiration
        };
        // TODO: Sigue
      });
    }
  }
);

blogApi.interceptors.request.use(
  (config) => {
    const token = useAuthStore().getState().token;
    if (token) {
      config.headers["Authentication"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { blogApi, API_URL };
