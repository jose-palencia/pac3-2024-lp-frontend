import { IoAddCircleOutline } from "react-icons/io5";
import { LinkCustom } from "../components";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useCategoriesStore } from "../store/useCategoriesStore";
import { useEffect, useState } from "react";
import { Loading } from "../../../shared/components/Loading";

export const CategoriesPage = () => {

  const categoriesData = useCategoriesStore((state) => state.categoriesData);
  const loadData = useCategoriesStore((state) => state.loadData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(isLoading) {
      loadData();
      setIsLoading(false);
    }
  }, [])

  if (isLoading) return <Loading/> 

  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <form className="flex gap-2 items-center">
            <input type="search" name="" id="" />
            <button type="submit">Buscar</button>
          </form>
        </div>

        <div className="flex items-center gap-x-3">
          <LinkCustom
            label="Nuevo"
            to="/administration/categories/new"
            icon={<IoAddCircleOutline />}
          />
        </div>
      </div>

      <div className="flex flex-col mt-2 w-full">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Nombre de Categoría</span>
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {categoriesData.items.map(({id, name, description}) => (
                  <tr key={id}>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <div>
                        <h2 className="font-medium text-gray-800 dark:text-white ">
                          {name}
                        </h2>
                        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                          {description}
                        </p>
                      </div>
                    </td>

                    <td className="px-4 py-4 flex gap-2 text-sm whitespace-nowrap">
                      <LinkCustom
                        label="Editar"
                        to={`edit/${id}`}
                        icon={<FaEdit />}
                      />

                      <LinkCustom
                        label="Borrar"
                        to={`delete/${id}`}
                        icon={<RiDeleteBin5Line />}
                      />
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Page{" "}
          <span className="font-medium text-gray-700 dark:text-gray-100">
            1 of 10
          </span>
        </div>

        <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
          <a
            href="#"
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>Anterior</span>
          </a>

          <a
            href="#"
            className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <span>Siguiente</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:-scale-x-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
