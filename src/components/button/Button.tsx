import './Button.css'

function Button({ disabled }: {disabled?: boolean}) {
  

  return (
    <>
        <div className ="button">
            <button type="submit" id="loginButton" name="loginButton" value="Login in" disabled={disabled}>Log in</button>
        </div>
    </>
    
)

}

export default Button
