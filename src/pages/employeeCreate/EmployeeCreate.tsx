import { useState } from "react";
import SmallButton from "../../components/button/SmallButton";
import Input from "../../components/Input/Input";
import Select from "../../components/select/Select";
import "./EmployeeCreate.css";
import {
  EMPLOYEE_ACTION_TYPES,
  type EmployeeState,
  type Employee,
} from "../../store/employee/employee.types";
import { useDispatch, useSelector } from "react-redux";

export default function EmployeeCreate() {
  const [values, setValues] = useState<Employee>({
    name: "",
    dateOfJoining: "",
    experience: 0,
    departmentId: "",
    role: "DEVELOPER",
    status: "ACTIVE",
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
  });

  const dispatch = useDispatch();

  //const result = useSelector((state) => state);
  const result = useSelector<EmployeeState>((state) => state.employees);
  console.log(result);

  const handleSubmit = () => {
    dispatch({
      type: EMPLOYEE_ACTION_TYPES.ADD,
      payload: values,
    });
  };

  const updateField = (field: string, value: string) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const updateAddressField = (field: string, value: string) => {
    setValues((prev) => {
      return { ...prev, address: { ...prev.address, [field]: value } };
    });
  };

  return (
    <>
      <div id="right">
        <div className="right_div">
          <p>Create Employee</p>
        </div>

        <form
          className="right_div"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <div id="flex">
            <Input
              label="Employee Name"
              type="text"
              placeholder="Employee Name"
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
            />

            <Input
              label="Joining Date"
              type="date"
              placeholder="Joining Date"
              value={values.dateOfJoining}
              onChange={(event) =>
                updateField("dateOfJoining", event.target.value)
              }
            />

            <Input
              label="Experience"
              type="number"
              placeholder="Experience"
              value={values.experience}
              onChange={(event) =>
                updateField("experience", event.target.value)
              }
            />

            <Select
              label="Department"
              options={["Design", "Development", "Testing", "Management"]}
              placeholder="Department"
              value={values.departmentId}
              onChange={(event) =>
                updateField("departmentId", event.target.value)
              }
            />

            <Select
              label="Role"
              options={["UI", "UX", "DEVELOPER", "HR"]}
              placeholder="Choose Role"
              value={values.role}
              onChange={(event) => updateField("role", event.target.value)}
            />

            <Select
              label="Status"
              options={["Active", "Inactive", "Probation"]}
              placeholder="Status"
              value={values.status}
              onChange={(event) => updateField("status", event.target.value)}
            />

            <Input
              label="Email"
              type="text"
              placeholder="Email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
            />

            <Input
              label="Password"
              type="text"
              placeholder="Password"
              value={values.password}
              onChange={(event) => updateField("password", event.target.value)}
            />

            <Input
              label="Age"
              type="number"
              placeholder="Age"
              value={values.age}
              onChange={(event) => updateField("age", event.target.value)}
            />

            <div className="Address">
              <Input
                label="Address"
                type="text"
                placeholder="Flat No./House No."
                value={values.address.houseNo}
                onChange={(event) =>
                  updateAddressField("houseNo", event.target.value)
                }
              />

              <Input
                type="text"
                placeholder="Address Line 1"
                value={values.address.line1}
                onChange={(event) =>
                  updateAddressField("line1", event.target.value)
                }
              />

              <Input
                type="text"
                placeholder="Address Line 2"
                value={values.address.line2}
                onChange={(event) =>
                  updateAddressField("line2", event.target.value)
                }
              />

              <Input
                type="text"
                placeholder="Pincode"
                value={values.address.pincode}
                onChange={(event) =>
                  updateAddressField("pincode", event.target.value)
                }
              />
            </div>
            <div id="employeeId">
              <Input
                label="Employee Id"
                type="text"
                placeholder="Employee Id"
                value={values.employeeId}
                onChange={(event) =>
                  updateField("employeeId", event.target.value)
                }
              />
            </div>
          </div>
          <div id="button">
            <SmallButton type="submit" value="create" className="blue" />
            <SmallButton type="reset" value="cancel" className="white" />
          </div>
        </form>
      </div>
    </>
  );
}

//<input type="submit" value="create"/>
//<input type="reset" value="cancel" style="width: 150px; background-color: white;"/>
