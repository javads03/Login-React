import React from "react";
import './ListHeader.css';

export default function ListHeader() {
  return (
    <div className="Listhead" id="listId1">
      <ul>
        <li>Employee Name</li>
        <li>Employee Id</li>
        <li>Joining Date</li>
        <li>Role</li>
        <li>
          <div className="Status" id="status">
            Status
          </div>
        </li>
        <li>Experience</li>
        <li>Action</li>
      </ul>
    </div>
  );
}
