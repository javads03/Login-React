import { useState } from "react";
import SmallButton from "../../components/button/SmallButton";
import Input from "../../components/Input/Input";
import Select from "../../components/select/Select";
import "./EmployeeEdit.css";

export default function EmployeeEdit() {

  const [values, setValues] = useState({
      name: "",
      joiningDate: "",
      experience: "",
      department: "",
      role: "",
      status: "",
      email: "",
      password: "",
      age: "",
      flatNo: "",
      line1: "",
      line2: "",
      pincode: "",
      employeeId: "",
    });

  const updateField = (field: string, value: string) => {
    setValues({
      ...values,
      [field]: value,
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
                          value={values.joiningDate}
                          onChange={(event) =>
                            updateField("joiningDate", event.target.value)
                          }
                        />
            
                        <Input label="Experience" type="text" placeholder="Experience" />
            
                        <Select
                          label="Department"
                          options={["Design", "Development", "Testing", "Management"]}
                          placeholder="Department"
                          value={values.department}
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
                            value={values.flatNo}
                            onChange={(event) => updateField("flatNo", event.target.value)}
                          />
            
                          <Input
                            type="text"
                            placeholder="Address Line 1"
                            value={values.line1}
                            onChange={(event) => updateField("line1", event.target.value)}
                          />
            
                          <Input
                            type="text"
                            placeholder="Address Line 2"
                            value={values.line2}
                            onChange={(event) =>
                              updateField("line2", event.target.value)
                            }
                          />
            
                          <Input type="text" placeholder="Pincode" />
                        </div>
                        <div id="employeeId">
                          <Input
                            label="Employee Id"
                            type="text"
                            placeholder="Employee Id"
                            value={values.employeeId}
                            onChange={(event) =>
                              updateField("employeeId", event.target.value)}
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
