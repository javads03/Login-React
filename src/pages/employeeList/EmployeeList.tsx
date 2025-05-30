import ListBar from "./components/ListBar";
import "./EmployeeList.css";
import { ListItem } from "./components/ListItem";
import { useSearchParams } from "react-router-dom";

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

  const [searchParams, setSearchParams] = useSearchParams();
  const filterStatus = searchParams.get("Status");

  function checkStatus({
    employeeName,
    employeeId,
    joiningDate,
    role,
    status,
    experience,
  }: {
    employeeName: string;
    employeeId: string;
    joiningDate: string;
    role: string;
    status: string;
    experience: string;
  }) {
    if (filterStatus) {
      if (filterStatus == "All") return true;
      else return status == filterStatus;
    } else return true;
  }

  const filteredEmployees = employees.filter(checkStatus);
  return (
    <>
      <div id="rightSide">
        <ListBar />

        <ListItem
          employeeName={"Employee Name"}
          employeeId={"Employee Id"}
          joiningDate={"Joining Date"}
          role={"Role"}
          status={"Status"}
          experience={"Experience"}
          isActionText={true}
          listId="listId1"
        />

        {filteredEmployees.map((e) => {
          return (
            <ListItem
              employeeName={e.employeeName}
              employeeId={e.employeeId}
              joiningDate={e.joiningDate}
              role={e.role}
              status={e.status}
              experience={e.experience}
              isActionButton={true}
              listId="listId2"
            />
          );
        })}
      </div>
    </>
  );
}
