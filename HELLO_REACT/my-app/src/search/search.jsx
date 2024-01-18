import { useParams } from "react-router-dom";

export function Search() {
  let params = useParams();
  return (
    <div>
      <h3>Search Results</h3>
      Category Name: {params.category} <br />
      Size : {params.size}
    </div>
  );
}
