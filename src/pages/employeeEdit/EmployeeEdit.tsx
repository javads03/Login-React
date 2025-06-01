import { useState } from "react";
import SmallButton from "../../components/button/SmallButton";
import Input from "../../components/Input/Input";
import Select from "../../components/select/Select";
import "./EmployeeEdit.css";
import { useLocation } from "react-router-dom";
import type { Employee } from "../../store/employee/employee.types";

export default function EmployeeEdit() {
  const location = useLocation();
  const employee = location.state;

  const [values, setValues] = useState<Employee>(employee);

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
      <div id="rightEdit">
        <div className="right_divEdit">
          <p>Edit Employee</p>
        </div>

        <form className="right_divEdit">
          <div id="flexEdit">
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
                updateField("joiningDate", event.target.value)
              }
            />

            <Input label="Experience" type="text" placeholder="Experience" />

            <Select
              label="Department"
              options={["Design", "Development", "Testing", "Management"]}
              placeholder="Department"
              value={values.departmentId}
              onChange={(event) =>
                updateField("department", event.target.value)
              }
            />

            <Select
              label="Role"
              options={["UI", "UX", "Developer", "HR"]}
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

            <Input label="Age" type="text" placeholder="Age" />

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
                disabled="true"
              />
            </div>
          </div>
          <div id="button">
            <SmallButton type="submit" value="save" className="blue" />
            <SmallButton type="reset" value="cancel" className="white" />
          </div>
        </form>
      </div>
    </>
  );
}

//<input type="submit" value="create"/>
//<input type="reset" value="cancel" style="width: 150px; background-color: white;"/>
