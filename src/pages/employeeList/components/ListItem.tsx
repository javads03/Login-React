import { MdOutlineEdit } from "react-icons/md";
import "./ListItem.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
export const ListItem = ({
  employeeName,
  employeeId,
  joiningDate,
  role,
  status,
  experience,
  isActionText,
  isActionButton,
  listId,
}: {
  employeeName: string;
  employeeId: string;
  joiningDate: string;
  role: string;
  status: string;
  experience: string;
  isActionText?: boolean;
  isActionButton?: boolean;
  listId: string;
}) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    console.log(`Deleted employee: ${employeeId}`);
    setShowModal(false);
  };

  return (
    <>
      <div
        className="Listhead"
        id={listId}
        onClick={() => {
          navigate(`/employees/${employeeId}`, {});
        }}
      >
        <ul>
          <li>{employeeName}</li>
          <li>{employeeId}</li>
          <li>{joiningDate}</li>
          <li>{role}</li>
          <li>
            <div className={status} id="status">
              {status}
            </div>
          </li>
          <li>{experience}</li>
          <li>
            {isActionButton && (
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
                    navigate(`${employeeId}/edit`, {});
                    e.stopPropagation();
                  }}
                >
                  <MdOutlineEdit color="rgba(16, 170, 192, 1)" />
                </button>
              </div>
            )}
            {isActionText && <>Action</>}
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
              Do you really want to delete <strong>{employeeName}</strong>?
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
