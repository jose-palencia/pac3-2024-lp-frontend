import { useParams } from "react-router-dom";

export const DeleteCategoryPage = () => {
  let params = useParams();
  console.log(params.id);
  return <div>DeleteCategoryPage</div>;
};
