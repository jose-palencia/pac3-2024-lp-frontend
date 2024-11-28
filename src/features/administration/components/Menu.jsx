import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="flex justify-start w-auto">
      <div className="">
        <div className="w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
          <a
            href="#"
            className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <FaUserCircle className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" />

            <div className="mx-1">
              <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Jane Doe
              </h1>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                janedoe@exampl.com
              </p>
            </div>
          </a>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Ver perfil
          </a>

          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Cambiar contraseña
          </a>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <Link
            to="/administration/categories"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Categorías
          </Link>

          <Link
            to="/administration/tags"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Etiquetas
          </Link>

          <Link
            to="/administration/posts"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Publicaciones
          </Link>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <Link
            to="/administration/users"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Usuarios
          </Link>

          <hr className="border-gray-200 dark:border-gray-700 " />

          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Salir
          </a>
        </div>
      </div>
    </div>
  );
};
