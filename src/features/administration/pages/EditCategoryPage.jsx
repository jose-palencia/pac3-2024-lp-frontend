import { useParams } from "react-router-dom";

export const EditCategoryPage = () => {
  let params = useParams();
  console.log(params.id);

  return <div>EditCategory</div>;
};
