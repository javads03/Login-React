import { useState } from "react";
import SmallButton from "../../components/button/SmallButton";
import Input from "../../components/Input/Input";
import Select from "../../components/select/Select";
import "./EmployeeEdit.css";
import { useLocation } from "react-router-dom";
import type { Employee } from "../../store/employee/employee.types";
import { useAppDispatch } from "../../store/store";
import type {
  EmployeeCreatePayload,
  EmployeeListResponse,
} from "../../api-service/employees/types";
import { useUpdateEmployeeMutation } from "../../api-service/employees/employee.api";
import { useDepartmentListQuery } from "../../api-service/department/department.api";
import React from "react";

export default function EmployeeEdit() {
  const location = useLocation();
  const values = location.state;

  const [newValues, setValues] = useState<EmployeeCreatePayload>({
    employeeId: values.employeeId,
    email: values.email,
    name: values.name,
    age: values.age,
    address: values.address,
    password: "",
    role: values.role,
    dataOfJoining: new Date(values.dataOfJoining),
    experience: values.experience,
    status: values.status,
    departmentId: values.department.id,
    id: values.id,
  });

  console.log(values);

  const [employeeUpdate] = useUpdateEmployeeMutation();

  //const [password, setPassword] = React.useState("");

  const { data: dept } = useDepartmentListQuery();

  const departmentOptions = dept?.map((d) => d.name) || [];

  const departmentOptionsId = dept?.map((d) => d.id) || [];

  const updateField = (field: string, value: string) => {
    setValues({
      ...newValues,
      [field]: value,
    });
  };

  const updatePasswordField = (field: string, value: string) => {
    console.log("password : " + value + " " + field);
    //setPassword(value);
    setValues({
      ...newValues,
      [field]: value,
    });
  };

  const updateAddressField = (field: string, value: string) => {
    setValues((prev) => {
      return { ...prev, address: { ...prev.address, [field]: value } };
    });
  };

  const updateNumberField = (field: string, value: number) => {
    setValues({
      ...newValues,
      [field]: value,
    });
  };

  const handleUpdate = async () => {
    const payload: EmployeeCreatePayload = {
      ...newValues,
      password:
        newValues.password !== "" ? newValues.password : values.password,
    };

    try {
      const response = await employeeUpdate(payload).unwrap();
      alert("Employee Updated");
    } catch (error: any) {
      console.log(error);
      alert(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div id="rightEdit">
        <div className="right_divEdit">
          <p>Edit Employee</p>
        </div>

        <form
          className="right_divEdit"
          onSubmit={(event) => {
            event.preventDefault();
            handleUpdate();
          }}
        >
          <div id="flexEdit">
            <Input
              label="Employee Name"
              type="text"
              placeholder="Employee Name"
              value={newValues.name}
              onChange={(event) => updateField("name", event.target.value)}
            />

            <Input
              label="Joining Date"
              type="date"
              placeholder="Joining Date"
              value={
                newValues.dataOfJoining
                  ? new Date(values.dataOfJoining).toISOString().split("T")[0]
                  : new Date().toISOString().split("T")[0]
              }
              onChange={(e) =>
                setValues({
                  ...newValues,
                  dataOfJoining: e.target.value
                    ? new Date(e.target.value)
                    : new Date(),
                })
              }
            />

            <Input
              label="Experience"
              type="number"
              placeholder="Experience"
              value={newValues.experience}
              onChange={(event) =>
                updateNumberField("experience", Number(event.target.value))
              }
            />

            <Select
              label="Department"
              options={departmentOptions}
              optionsId={departmentOptionsId}
              placeholder="Department"
              value={newValues.departmentId}
              onChange={(event) =>
                updateNumberField("id", Number(event.target.value))
              }
            />

            <Select
              label="Role"
              options={["UI", "UX", "DEVELOPER", "HR"]}
              placeholder="Choose Role"
              value={newValues.role}
              onChange={(event) => updateField("role", event.target.value)}
            />

            <Select
              label="Status"
              options={["ACTIVE", "INACTIVE", "PROBATION"]}
              placeholder="Status"
              value={newValues.status}
              onChange={(event) => updateField("status", event.target.value)}
            />

            <Input
              label="Email"
              type="text"
              placeholder="Email"
              value={newValues.email}
              onChange={(event) => updateField("email", event.target.value)}
            />

            <Input
              label="Password"
              type="text"
              placeholder="Password"
              value={newValues.password}
              onChange={(event) =>
                updatePasswordField("password", event.target.value)
              }
            />

            <Input
              label="Age"
              type="text"
              placeholder="Age"
              value={newValues.age}
              onChange={(event) =>
                updateNumberField("age", Number(event.target.value))
              }
            />

            <div className="Address">
              <Input
                label="Address"
                type="text"
                placeholder="Flat No./House No."
                value={newValues.address.houseNo}
                onChange={(event) =>
                  updateAddressField("houseNo", event.target.value)
                }
              />

              <Input
                type="text"
                placeholder="Address Line 1"
                value={newValues.address.line1}
                onChange={(event) =>
                  updateAddressField("line1", event.target.value)
                }
              />

              <Input
                type="text"
                placeholder="Address Line 2"
                value={newValues.address.line2}
                onChange={(event) =>
                  updateAddressField("line2", event.target.value)
                }
              />

              <Input
                type="text"
                placeholder="Pincode"
                value={newValues.address.pincode}
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
                value={newValues.employeeId}
                onChange={(event) =>
                  updateField("employeeId", event.target.value)
                }
                disabled="true"
              />
            </div>
          </div>
          <div id="button">
            <SmallButton type="submit" value="save" className="blue" />
            <SmallButton type="button" value="cancel" className="white" />
          </div>
        </form>
      </div>
    </>
  );
}

//<input type="submit" value="create"/>
//<input type="reset" value="cancel" style="width: 150px; background-color: white;"/>
