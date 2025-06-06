import type { EmployeeListResponse } from "../../api-service/employees/types";
import type { Employee } from "../../store/employee/employee.types";
import "./IconButton.css";
import { useNavigate } from "react-router-dom";

export default function IconButton({
  tag,
  navPath,
  imagePath,
  values,
}: {
  tag: string;
  navPath: string;
  imagePath: string;
  values?: EmployeeListResponse;
}) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="create"
        onClick={() => {
          console.log(values);
          navigate(navPath, { state: values });
        }}
      >
        <div className="circle">
          <img src={imagePath} />
        </div>
        <div className="tag">{tag}</div>
      </div>
    </>
  );
}
