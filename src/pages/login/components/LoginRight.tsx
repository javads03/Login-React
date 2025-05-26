

import Button from "../../../components/button/Button"
import "./LoginRight.css"

export default function Right() {
  return (
    <>
        <div className="rightcontainer">
            <div className="rightcontainer-box">
                    <div className="rightcontainer-box1">
                            <img src="./src/assets/kv-logo.png" alt="Circle image" />
                    </div>
                    <form>
                        <div className="rightcontainer-box2">
                                <label className="labelleft">Username</label>
                                <input type="text" name="" id="" />
                        </div>
                        <div className="rightcontainer-box2">
                                <input type="password" placeholder="Password" name="" id="" />
                        </div>
                        
                        <Button/>

                    </form>
                </div>
        </div>

  
    </>
    
  )
}
