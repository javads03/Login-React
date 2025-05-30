
import DetailBar from './components/DetailBar'
import DetailBox from './components/DetailBox'
import './EmployeeDetailById.css'

export default function EmployeeDetailById() {
  return (
    <>
      <div id="rightSide">
        <DetailBar path = "edit"/>
        <DetailBox
          employeeName={"Ken"}
          employeeId={"KV01"}
          joiningDate={"11/11/2011"}
          role={"Developer"}
          status={"Inactive"}
          experience={"5"}
          address={"Street 1"}
        />
      </div>
    </>
  );
}
