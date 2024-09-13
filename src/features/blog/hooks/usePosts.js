import { useState } from "react"
import { getPostsList } from "../../../shared/actions/posts/posts";

export const usePosts = () => {
  const [posts, setPosts] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const loadPosts = async (searchTerm, page) => {
    setIsLoading(true);
    const result = await getPostsList(searchTerm, page);
    setPosts(result);
    setIsLoading(false);
  } 



  return {
    // Properties
    posts,
    isLoading,
    // Methods
    loadPosts,
  }
}
