import ListBar from "./components/ListBar";
import "./EmployeeList.css";
import { ListItem } from "./components/ListItem";
import { useSearchParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import type {
//   Employee,
//   EmployeeState,
//   Role,
//   Status,
// } from "../../store/employee/employee.types";
import ListHeader from "./components/ListHeader";
//import { useAppSelector } from "../../store/store";
import { useEmployeeListQuery } from "../../api-service/employees/employee.api";
import type { EmployeeListResponse } from "../../api-service/employees/types";

export default function EmployeeList() {
  const { data: result } = useEmployeeListQuery();
  // console.log("result :" + result);

  //const result = useAppSelector((state) => state.employee.employees);
  //console.log(result);

  const [searchParams, setSearchParams] = useSearchParams();
  const filterStatus = searchParams.get("Status");

  function checkStatus(emp: EmployeeListResponse) {
    if (filterStatus) {
      if (filterStatus.toLowerCase() == "all") return true;
      else return emp.status.toLowerCase() == filterStatus.toLowerCase();
    } else return true;
  }

  const filteredEmployees = result?.filter(checkStatus);

  return (
    <>
      <div id="rightSide">
        <ListBar />

        <ListHeader />

        {filteredEmployees?.map((e: EmployeeListResponse) => {
          return <ListItem values={e} />;

        })}
      </div>
    </>
  );
}
