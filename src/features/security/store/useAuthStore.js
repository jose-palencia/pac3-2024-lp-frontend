import { create } from "zustand";
import { loginAsync } from "../../../shared/actions/auth";
import { jwtDecode } from "jwt-decode";

export const useAuthStore = create((set, get) => ({
  user: null,
  token: null,
  roles: [],
  refreshToken: null,
  isAuthenticated: false,
  message: "",
  error: false,
  login: async (form) => {
    // const result = await loginAsync(form);
    const { status, data, message,  } = await loginAsync(form);
   
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
    set({user: null, token: null, refreshToken: null, isAuthenticated: false, error: false, message: '', roles: []});
    localStorage.clear();
  },

  validateAuthentication: () => {
    const token = localStorage.getItem('token') ?? '';

    if(token === '') {
      set({isAuthenticated: false});
      return ;
    } else {
      try{
        const decodeJwt = jwtDecode(token);
        const currenTime = Math.floor(Date.now()/1000);
        if(decodeJwt.exp < currenTime) {
          console.log('Token expirado');
          set({isAuthenticated: false});
          return;
        }

        const roles = decodeJwt["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ?? [];

        set({isAuthenticated: true, roles: typeof(roles) === 'string' ? [roles] : roles});
      } catch(error) {
        console.error(error);
        set({isAuthenticated: false})
      }
    }

  }
}));
