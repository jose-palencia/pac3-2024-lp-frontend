import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Tags } from "../components/Tags";
import MarkdownEditor from "@uiw/react-markdown-editor";
import { SlLike } from "react-icons/sl";

const mdStr = `
### Nuevo Laboratorio de Inteligencia Artificial

La Universidad ha inaugurado un nuevo laboratorio de inteligencia artificial, equipado con tecnología de punta para el desarrollo de proyectos innovadores.

![Laboratorio de IA](https://images.unsplash.com/photo-1612066473428-fb6833a0d855?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

## Artículos Destacados

### La Importancia del Aprendizaje Automático

El aprendizaje automático es una rama de la inteligencia artificial que permite a las máquinas aprender y mejorar a partir de la experiencia sin ser programadas explícitamente.

- **Ventajas del Aprendizaje Automático:**
  - Automatización de tareas repetitivas
  - Mejora en la toma de decisiones
  - Análisis de grandes volúmenes de datos

### Cómo Comenzar con Python

Python es uno de los lenguajes de programación más populares debido a su sintaxis clara y su amplia comunidad de desarrolladores.

\`\`\`javascript
// Ejemplo de código en JavaScript
const saludo = () => {
  print("Hola, mundo!");
}

saludo();
\`\`\`

## Enlaces de Interés

- [Página oficial de la carrera](https://www.unah.edu.hn)
- [Repositorio de proyectos](https://github.com/unah/ingenieria-en-sistemas)

## Conclusión

Mantente al día con las últimas noticias y avances en la carrera de Ingeniería en Sistemas. ¡Sigue explorando y aprendiendo!
`;

export const PostPage = () => {
  const [post, setPost] = useState({
    title:
      "Bienvenidos al laboratorio de Inteligencia Artificial de Ingeniería en Sistemas.",
    author: { id: "", fullName: "Juan Perez" },
    publicationDate: "2 de agosto de 2024",
    likes: 2,
    content: mdStr,
    tags: ["IA", "Python"],
  });

  const { id } = useParams();
  console.log(id);
  return (
    <div className="max-w-none w-full p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-unah-blueLight text-4xl font-bold mb-4">
        {post.title}
      </h1>
      <div className="flex md:flex-row flex-col w-full justify-between md:items-center py-2 mb-4">
        <div>
          <div>
            <span className="text-unah-blueDark">Publicado por:</span>{" "}
            <span className="font-bold text-unah-blueDark">
              {post.author.fullName}
            </span>
          </div>
          <div>
            <span className="text-unah-blueDark">Fecha de publicación:</span>{" "}
            <span className="font-bold text-unah-blueDark">
              {post.publicationDate}
            </span>
          </div>
        </div>
        <Tags tags={post.tags} />
      </div>
      <MarkdownEditor.Markdown
        className="prose prose-lg max-w-none w-full prose-h1:border-none prose-h1:text-unah-blueLight prose-h2:text-unah-blueLight prose-h3:text-unah-blueLight prose-h4:text-unah-blueLight prose-h5:text-unah-blueLight prose-h6:text-unah-blueLight prose-strong:text-unah-blueLight prose-p:text-unah-blueDark prose-li:text-unah-blueDark prose-img:rounded-xl prose-img:shadow-md prose-img:w-full"
        source={post.content}
      />
      <div className="flex flex-row mt-6 pt-3 border-t-2">
        <div className="flex gap-2 items-center">
          <button className="flex flex-row gap-2 items-center px-4 py-3 font-bold text-white bg-unah-blue rounded hover:bg-unah-blueLight hover:text-unah-yellow">
            <SlLike /> <span>Me Gusta</span>
          </button>
          <span className="font-medium text-unah-blue">
            a {post.likes} {post.likes === 0 ? 'personas' : post.likes === 1 ? 'persona' : 'personas'} les ha gustado esta publicación.
          </span>
        </div>
      </div>
    </div>
  );
};
