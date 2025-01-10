import { useState } from "react";
import Input from "./Input";
import { isEmail,isNotEmpty,hasMinLength } from "../util/validation";
import { useInput } from "../Hooks/useInput";

export default function Login() {
  // const [enteredEmail,setEnteredEmail] = useState('');
  // const [enteredPassword,setEnteredPassword]=useState('')
  const {value:emailValue,
    handleInputChange:handleEmailChange,
    handleInputBlur:handleEmailBlur,
    hasError:emailHasError
  }=useInput('', (value)=> isEmail(value) && isNotEmpty(value));


  const {value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur : handlePasswordBlur,
    hasError: passwordHasError
  }= useInput('',(value)=> hasMinLength(value,6));


  function handleSubmit(event){
    event.preventDefault();
    if(emailHasError || passwordHasError){
      return
    }
    console.log(emailValue,passwordValue);
 }




  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id= "email"
          name="email"
          type="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && 'Please enter a vaild email'}
        />

        <Input 
            label='Password'
            id="password" 
            type="password" 
            name="password" 
            onChange={handlePasswordChange}
            onBlur = {handlePasswordBlur}
            value={passwordValue}
            error={passwordHasError && "Please enter a valid email"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" type="reset">Reset</button>
        <button className="button" type="submit" >Login</button>
      </p>
    </form>
  );
}
