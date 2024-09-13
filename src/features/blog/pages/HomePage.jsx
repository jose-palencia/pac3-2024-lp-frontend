// import { useEffect } from "react"
import { Link } from "react-router-dom"
// import { getPostsList } from "../../../shared/actions/posts/posts";

export const HomePage = () => {
 
  // useEffect(() => {
  //   getPostsList().then(res => console.log(res));
    
  //   //console.log(result);    
  // }, []);

  return (
    <div className="flex flex-col items-center content-center w-full ">
      {/* Hero section */}
      <div className="h-48 items-center justify-center text-unah-blue">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Bienvenido al Blog de Ingeniería en Sistemas</h1>
          <p className="text-xl mb-6">Noticias de la carrera, tecnología y lenguajes de programación</p>
          <Link className="bg-unah-blueLight hover:bg-unah-blueDark text-white font-bold py-2 px-4 rounded" to="/blog">
            Leer el Blog
          </Link>
        </div>
      </div>
      {/* Introduction section */}
      <div className="py-10 px-6 bg-gray-100 rounded shadow">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-lg mb-4">En este blog, compartimos noticias relevantes sobre la carrera de 
            Ingeniería en Sistemas, así como las ultimas novedades en tecnología
            y lenguajes de programación. Nuestro objetivo es mantenerte informado
            y actualizado sobre las tendencias y avances en el campo.
          </p>
        </div>
      </div>
      {/* Latest news section */}
      <div className="py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Últimas Noticias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Noticia reciente 1</h3>
              <p className="mb-4">Descripción breve de la noticias reciente...</p>
              <Link to="/blog" className="text-blue-500 hover:underline" >Leer más</Link>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Noticia reciente 2</h3>
              <p className="mb-4">Descripción breve de la noticias reciente...</p>
              <Link to="/blog" className="text-blue-500 hover:underline" >Leer más</Link>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-bold mb-2">Noticia reciente 3</h3>
              <p className="mb-4">Descripción breve de la noticias reciente...</p>
              <Link to="/blog" className="text-blue-500 hover:underline" >Leer más</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Popular categories section */}
      <div className="py-10 px-6 w-full bg-gray-100 rounded shadow">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Categorías Populares</h2>
          <div className="flex flex-col md:flex-row mx-2">
            <div className="w-full md:w-1/3 mx-3 px-2 mb-4 bg-white shadow p-6 rounded">
              <h3 className="text-xl font-bold mb-2">Tecnología</h3>
              <p className="mb-4">Descripción de la categoría de tecnología.</p>
              <Link to="/blog" className="text-blue-500 hover:underline" >Leer más</Link>
            </div>
            <div className="w-full md:w-1/3 mx-3 px-2 mb-4 bg-white shadow p-6 rounded">
              <h3 className="text-xl font-bold mb-2">Lenguajes de Programación</h3>
              <p className="mb-4">Descripción de la categoría de Lenguajes de programación.</p>
              <Link to="/blog" className="text-blue-500 hover:underline" >Leer más</Link>
            </div>
            <div className="w-full md:w-1/3 mx-3 px-2 mb-4 bg-white shadow p-6 rounded">
              <h3 className="text-xl font-bold mb-2">Noticias de la carrera</h3>
              <p className="mb-4">Descripción de la categoría de Ingeniería en Sistemas.</p>
              <Link to="/blog" className="text-blue-500 hover:underline" >Leer más</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
