import "./DetailBox.css";

export default function DetailBox({
  employeeName,
  employeeId,
  joiningDate,
  role,
  status,
  experience,
  address,
}: {
  employeeName: string;
  employeeId: string;
  joiningDate: string;
  role: string;
  status: string;
  experience: string | number;
  address: string;
}) {

  function formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleDateString(); // Returns a string like "6/2/2025"
  }

  return (
    <>
      <div className="detailBox">
        <div className="row">
          <ul>
            <li>
              <div className="field">Employee Name</div>
              <div className="value">{employeeName}</div>
            </li>
            <li>
              <div className="field">Joining Date</div>
              <div className="value">{formatDate(joiningDate)}</div>
            </li>
            <li>
              <div className="field">Role</div>
              <div className="value">{role}</div>
            </li>
            <li>
              <div className="field">Status</div>
              <div className={status} id="statusBox">
                {status}
              </div>
            </li>
            <li>
              <div className="field">Experience</div>
              <div className="value">{experience} Years</div>
            </li>
          </ul>
        </div>

        <hr />

        <div className="row">
          <ul>
            <li>
              <div className="field">Address</div>
              <div className="value">{address}</div>
            </li>

            <li>
              <div className="field">Employee Id</div>
              <div className="value">{employeeId}</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
