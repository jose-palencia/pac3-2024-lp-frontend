export const Sidebar = () => {
  return (
    <div className="hidden w-4/12 lg:block">
      {/* Inicio Sección de Autores */}
      <div className="px-8">
        <h2 className="mb-4 text-xl font-bold text-gray-700">Autores</h2>
        <div className="flex flex-col max-w-sm py-4 mx-auto bg-white rounded-md">
          <ul>
            <li className="flex items-center mt-6">
              <img
                className="object-cover w-10 h-10 mx-4 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
              />
              <p>
                <a href="">Maria Mejia</a>{" "}
                <span>ha creado 33 publicaciones</span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <img
                className="object-cover w-10 h-10 mx-4 rounded-full"
                src="https://plus.unsplash.com/premium_photo-1675129522693-bd62ffe5e015?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
              />
              <p>
                <a href="">Yamal Jhonson</a>{" "}
                <span>ha creado 12 publicaciones</span>
              </p>
            </li>
            <li className="flex items-center mt-6">
              <img
                className="object-cover w-10 h-10 mx-4 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar"
              />
              <p>
                <a href="">Samir Yaha</a>{" "}
                <span>ha creado 41 publicaciones</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* Fin Sección de Autores */}
      {/* Inicio Sección de Categorías */}
      <div className="px-8 mt-10">
        <h2 className="mb-4 text-xl font-bold text-gray-700">Categorías</h2>
        <div className="flex flex-col max-w-sm p-4 mx-auto bg-white rounded-md">
          <ul>
            <li className="mb-2">
              <a
                className="mx-1 font-bold text-gray-700 hover:text-unah-yellow hover:underline"
                href="#"
              >
                AWS
              </a>
            </li>
            <li className="mb-2">
              <a
                className="mx-1 font-bold text-gray-700 hover:text-unah-yellow hover:underline"
                href="#"
              >
                Cursos
              </a>
            </li>
            <li className="mb-2">
              <a
                className="mx-1 font-bold text-gray-700 hover:text-unah-yellow hover:underline"
                href="#"
              >
                Tutoriales
              </a>
            </li>
            <li className="mb-2">
              <a
                className="mx-1 font-bold text-gray-700 hover:text-unah-yellow hover:underline"
                href="#"
              >
                Software Libre
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Fin Sección de Categorías */}
    </div>
  );
};
