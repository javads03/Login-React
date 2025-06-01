import { useLocation } from "react-router-dom";
import DetailBar from "./components/DetailBar";
import DetailBox from "./components/DetailBox";
import "./EmployeeDetailById.css";

export default function EmployeeDetailById() {
  const location = useLocation();
  const employee = location.state;

  return (
    <>
      <div id="rightSide">
        <DetailBar path="edit" values= {employee}/>
        <DetailBox
          employeeName={employee.name}
          employeeId={employee.employeeId}
          joiningDate={employee.dateOfJoining}
          role={employee.role}
          status={employee.status}
          experience={employee.experience}
          address={
            employee.address.houseNo +
            " " +
            employee.address.line1 +
            " " +
            employee.address.line2 +
            " " +
            employee.address.pincode + " " 
          }
        />
      </div>
    </>
  );
}
