import { useSearchParams } from "react-router-dom";
import IconButton from "../../../components/button/IconButton";
import "./ListBar.css";

export default function ListBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilter(value: string) {
    const status = searchParams.get("Status");
    if (status) {
      //searchParams.delete("Status",status)
      searchParams.set("Status", value);
      setSearchParams(searchParams);
    }
    else{
      searchParams.set("Status", value);
      setSearchParams(searchParams);
    }
  }

  return (
    <>
      <div className="listBar">
        <div>
          <h4>Employee List</h4>
        </div>
        <div className="listBarEndItems">
          <div className="listBarEndItem1">
            <label>Filter By</label>
            <br />
            <select id="filter" onChange={(e) => handleFilter(e.target.value)}>
              <option value="Status" hidden>Status</option>
              <option value="All">All</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Probation">Probation</option>
            </select>
          </div>
          <IconButton
            tag="Create Employee"
            navPath="/employees/create"
            imagePath="/src/assets/+.png"
            //values={}
          />
        </div>
      </div>
    </>
  );
}
