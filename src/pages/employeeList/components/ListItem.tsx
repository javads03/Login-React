import { MdOutlineEdit } from "react-icons/md";
import "./ListItem.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import type { Employee } from "../../../store/employee/employee.types";


export const ListItem = ({ values } :{ values :  Employee }) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    console.log(`Deleted employee: ${values.employeeId}`);
    setShowModal(false);
  };

  return (
    <>
      <div
        className="Listhead"
        id="listId2"
        onClick={() => {
          navigate(`/employees/${values.employeeId}`, { state: values });
        }}
      >
        <ul>
          <li>{values.name}</li>
          <li>{values.employeeId}</li>
          <li>{values.dateOfJoining}</li>
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
              <button onClick={handleDelete} className="confirm-btn">
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
