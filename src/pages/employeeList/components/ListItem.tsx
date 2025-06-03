import { MdOutlineEdit } from "react-icons/md";
import "./ListItem.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
//import type { Employee } from "../../../store/employee/employee.types";
import { useAppDispatch } from "../../../store/store";
//import { deleteEmployee } from "../../../store/employee/employeeReducer";
import type { EmployeeListResponse } from "../../../api-service/employees/types";
import { useDeleteEmployeeMutation } from "../../../api-service/employees/employee.api";

export const ListItem = ({ values }: { values: EmployeeListResponse }) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();

  const [deleteEmployee] = useDeleteEmployeeMutation();

  const handleDelete = async (id: number) => {
    // console.log(`Deleted employee: ${values.employeeId}`);
    // dispatch(deleteEmployee(values));
    // setShowModal(false);

    deleteEmployee(id)
      .then(() => {
        setShowModal(false);
      })
      .catch((error) => {
        console.log(error.data.message);
      });
  };
  console.log(values);

  function formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString(); // Returns a string like "6/2/2025"
  }

  console.log(values);

  return (
    <>
      <div
        className="Listhead"
        id="listId2"
        onClick={() => {
          navigate(`/employees/${values.id}`, { state: values });
        }}
      >
        <ul>
          <li>{values.name}</li>
          <li>{values.employeeId}</li>
          <li>{formatDate(values.dataOfJoining)}</li>
          <li>{values.role}</li>
          <li>
            <div className={values.status} id="status">
              {values.status}
            </div>
          </li>
          <li>{values.experience}</li>
          <li>
            <div>
              <button
                onClick={(e) => {
                  setShowModal(true);
                  e.stopPropagation();
                }}
              >
                <RiDeleteBin6Line color="red" />
              </button>
              <button
                onClick={(e) => {
                  navigate(`${values.employeeId}/edit`, { state: values });
                  e.stopPropagation();
                }}
              >
                <MdOutlineEdit color="rgba(16, 170, 192, 1)" />
              </button>
            </div>
          </li>
        </ul>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <h3>Are you sure?</h3>
            <h4>
              Do you really want to delete <strong>{values.name}</strong>?
            </h4>
            <div className="modal-actions">
              <button onClick= {() => {if (values.id) handleDelete(values.id)}} className="confirm-btn">
                Delete
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
