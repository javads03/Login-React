import ListBar from "./components/ListBar";
import "./EmployeeList.css";
import { ListItem } from "./components/ListItem";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type {
  Employee,
  EmployeeState,
  Role,
  Status,
} from "../../store/employee/employee.types";
import ListHeader from "./components/ListHeader";

export default function EmployeeList() {
  const employees = [
    {
      employeeName: "Ken",
      employeeId: "KV01",
      joiningDate: "11/11/2011",
      role: "Devloper",
      status: "Active",
      experience: "5",
    },
    {
      employeeName: "Zen",
      employeeId: "KV02",
      joiningDate: "11/11/2011",
      role: "Devloper",
      status: "Inactive",
      experience: "5",
    },
    {
      employeeName: "Ben",
      employeeId: "KV03",
      joiningDate: "11/11/2011",
      role: "Devloper",
      status: "Probation",
      experience: "5",
    },
  ];

  const result = useSelector<EmployeeState>((state) => state.employees);
  //console.log(result);

  const [searchParams, setSearchParams] = useSearchParams();
  const filterStatus = searchParams.get("Status");

  function checkStatus({
    name,
    employeeId,
    dateOfJoining,
    role,
    status,
    experience,
  }: {
    name: string;
    employeeId: string;
    dateOfJoining: string;
    role: Role;
    status: Status;
    experience: string;
  }) {
    if (filterStatus) {
      if (filterStatus == "All") return true;
      else return status == filterStatus;
    } else return true;
  }

  const filteredEmployees = result.filter(checkStatus);

  return (
    <>
      <div id="rightSide">
        <ListBar />

        <ListHeader />

        {filteredEmployees.map((e) => {
          return <ListItem values = {e}/>;
        })}
      </div>
    </>
  );
}
