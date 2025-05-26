import SmallButton from '../../../components/button/SmallButton'
import Input from '../../../components/Input/Input'
import Select from '../../../components/select/Select'
import './EmployeeRight.css'

export default function EmployeeRight() {
  return (
    <>
        <div id = "right">
            <div className = "right_div">
                <h2>Create Employee</h2>
            </div>

            
            <form className='right_div'>
                <div id = "flex">
                    <Input label='Employee Name' type='text' placeholder='Employee Name'/>

                    <Input label='Joining Date' type='date' placeholder='Joining Date'/>

                    <Input label='Experience' type='text' placeholder='Experience'/>

                    <Select label='Department' options={["Design","Development","Testing","Management"]} placeholder='Department'/>

                    <Select label='Role' options={["UI","UX","Developer","HR"]} placeholder='Choose Role'/>

                    <Select label='Status' options={["Active","Inactive","Probation"]} placeholder='Status'/>

                    <div className = "Address">
                        <Input label='Address' type='text' placeholder='Flat No./House No.'/>

                        <Input type='text' placeholder='Address Line 1'/>

                        <Input type='text' placeholder='Address Line 2'/>

                    </div>

                </div>
                <div id = "button">
                    
                    <SmallButton type="submit" value="create" className="blue"/>
                    <SmallButton type="reset" value="cancel" className="white"/>

                </div>
                </form>
            
            </div>
        
    </>
  )
}

//<input type="submit" value="create"/>
//<input type="reset" value="cancel" style="width: 150px; background-color: white;"/>