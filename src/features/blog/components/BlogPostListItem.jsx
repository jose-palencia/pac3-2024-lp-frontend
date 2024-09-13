import { Link } from "react-router-dom";
import { Tags } from "./Tags";
import { formatDate } from "../../../shared/utils";

export const BlogPostListItem = ({ post }) => {
  return (
    <div
      key={post.id}
      className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md mb-5"
    >
      <div className="flex items-center justify-between">
        <span className="font-light text-gray-600">
          {formatDate(post.publicationDate)}
        </span>
        <Tags tags={post.tags} />
      </div>
      <div className="mt-2">
        <Link to={`/blog/post/${post.id}`}>{post.title}</Link>
        <p className="mt--2 text-gray-600">{post.overview}</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <Link
          to={`/blog/post/${post.id}`}
          className="text-unah-blue hover:underline"
        >
          Leer más
        </Link>
        <div>
          <a href="#" className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Avatar"
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            />
            <h3 className="font-bold text-gray-600 hover:underline">
              Juanita Mejia
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};
