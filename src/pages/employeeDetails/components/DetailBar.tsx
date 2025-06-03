import type { EmployeeListResponse } from "../../../api-service/employees/types";
import IconButton from "../../../components/button/IconButton";
import type { Employee } from "../../../store/employee/employee.types";
import './DetailBar.css'

export default function DetailBar({path, values}: {path: string, values: EmployeeListResponse}) {
  return (
    <>
      <div className="detailsBar">
        <div>
          <h4>Employee Details</h4>
        </div>
        <div className="detailsBarEndItems">
          <IconButton
            tag="Edit"
            navPath={path}
            imagePath="/src/assets/edit.png"
            values= {values}
          />
        </div>
      </div>
    </>
  );
}
