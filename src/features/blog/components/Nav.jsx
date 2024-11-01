import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../security/store";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleLogout = () => {
    logout();
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="px-6 py-4 bg-unah-blue shadow">
      <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <Link
              to="/home"
              className="text-xl font-bold text-white md:text-2xl"
            >
              Blog IS - CUROC
            </Link>
          </div>
          <div>
            <button
              type="button"
              onClick={handleMenuToggle}
              className="block text-white hover:text-unah-yellow md:hidden"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex md:flex-row md:mx-4`}
        >
          <Link
            to="/home"
            className="my-1 text-white hover:text-unah-yellow md:mx-4 md:my-0"
          >
            Inicio
          </Link>
          <Link
            to="/blog"
            className="my-1 text-white hover:text-unah-yellow md:mx-4 md:my-0"
          >
            Blog
          </Link>
          <Link
            to="/home"
            className="my-1 text-white hover:text-unah-yellow md:mx-4 md:my-0"
          >
            Sobre nosotros
          </Link>
          {isAuthenticated ? (
            <button 
              onClick={handleLogout}
              className="my-1 text-white text-left hover:text-unah-yellow md:mx-4 md:my-0"
            >Salir</button>
          ) : (
            <Link
              to="/security/login"
              className="my-1 text-white hover:text-unah-yellow md:mx-4 md:my-0"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
