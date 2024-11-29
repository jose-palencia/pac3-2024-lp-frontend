import { blogApi } from "../../../config/api/blogApi";

export const getCategoriesPaginationAsync = async (
  searchTerm = "",
  page = 1
) => {
  try {
    const { data } = await blogApi.get(
      `/categories?searchTerm=${searchTerm}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return error?.response.data;
  }
};
