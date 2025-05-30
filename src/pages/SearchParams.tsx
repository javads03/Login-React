import { useParams, useSearchParams } from "react-router-dom";
import "./SearchParams.css";

export default function SearchParams() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  function getQuery() {
    const status = searchParams.get("Status");
    console.log(status);
  }

  function setQuery() {
    searchParams.set("Role", "Dev");
    setSearchParams(searchParams);
  }

  return (
    <>
      <div id="right">
        <h3> Employee Details</h3>
        <h4>Employee Id: {id}</h4>

        <button type="button" className="query" onClick={getQuery}>
          Get Query
        </button>

        <button type="button" className="query"onClick={setQuery}>
          Set Query
        </button>
      </div>
    </>
  );
}
