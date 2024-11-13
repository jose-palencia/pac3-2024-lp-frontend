import { create } from "zustand";
import { loginAsync } from "../../../shared/actions/auth";

export const useAuthStore = create((set, get) => ({
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  message: "",
  error: false,
  login: async (form) => {
    // const result = await loginAsync(form);
    const { status, data, message,  } = await loginAsync(form);
    console.log({status});
    
    if (status) {
      set({
        error: false,
        user: {
          email: data.email,
          tokenExpiration: data.tokenExpiration,
        },
        token: data.token,
        refreshToken: data.refreshToken,
        isAuthenticated: true,
        message: message
      });

      localStorage.setItem('user', JSON.stringify(get().user ?? {}));
      localStorage.setItem('token', get().token);
      localStorage.setItem('refreshToken', get().refreshToken);

      return;
    }

    set({message: message, error: true });
    return;
  },
  setSession: (user, token, refreshToken) => {
    set({user: user, token: token, refreshToken: refreshToken, isAuthenticated: true});
    localStorage.setItem('user', JSON.stringify(get().user ?? {}));
    localStorage.setItem('token', get().token);
    localStorage.setItem('refreshToken', get().refreshToken);
  }, 
  logout: () => {
    set({user: null, token: null, refreshToken: null, isAuthenticated: false, error: false, message: ''});
    localStorage.clear();
  },
}));
