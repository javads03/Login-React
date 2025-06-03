import { useLocation, useParams } from "react-router-dom";
import DetailBar from "./components/DetailBar";
import DetailBox from "./components/DetailBox";
import "./EmployeeDetailById.css";
import { useEmployeeByIdQuery } from "../../api-service/employees/employee.api";
import type { EmployeeListResponse } from "../../api-service/employees/types";

export default function EmployeeDetailById() {
  // const location = useLocation();
  // const employee = location.state;
  //console.log("here : "+employee.id);
  const { id } = useParams();
  const dummyEmployee: EmployeeListResponse = {
    name: "",
    dataOfJoining: "",
    experience: 0,
    department: {id: 0, name: ""},
    role: "Role",
    status: "Status",
    email: "",
    password: "",
    age: 0,
    address: {
      houseNo: "",
      line1: "",
      line2: "",
      pincode: "",
    },
    employeeId: "",
    id: 0
  };
  const { data: result } = useEmployeeByIdQuery(Number(id));
  console.log(result);

  return (
    <>
      <div id="rightSide">
        <DetailBar path="edit" values={result? result: dummyEmployee} />
        <DetailBox
          employeeName={result?.name ? result.name : ""}
          employeeId={result?.employeeId ? result.employeeId : ""}
          joiningDate={result?.dataOfJoining ? result.dataOfJoining : ""}
          role={result?.role ? result.role : ""}
          status={result?.status ? result.status : ""}
          experience={result?.experience ? result.experience : ""}
          address={
            result?.address
              ? result.address.houseNo +
                " " +
                result.address.line1 +
                " " +
                result.address.line2 +
                " " +
                result.address.pincode +
                " "
              : ""
          }
        />
      </div>
    </>
  );
}
