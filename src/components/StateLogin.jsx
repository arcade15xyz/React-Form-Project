import { useState } from "react";
import Input from "./Input";

export default function Login() {
  // const [enteredEmail,setEnteredEmail] = useState('');
  // const [enteredPassword,setEnteredPassword]=useState('')
  const [enteredValues,setEnteredValues] = useState({
    email:'',
    password:''
  });
  const [didEdit,setDidEdit] = useState({
    email: false,
    password:false
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
  const passwordIsInvalid =
   didEdit.password && enteredValues.password.trim().length <6;

  function handleSubmit(event){
    event.preventDefault();
    console.log(enteredValues);
    setEnteredValues({
      email:"",
      password:""
    });
  }

  function handleInputBlur(identifier){
    setDidEdit(prevEdit =>({
      ...prevEdit,
      [identifier]:true
    }))
  }

  function handleInputChange(identifier,value){
    setEnteredValues(prevValues =>({
      ...prevValues,
      [identifier]: value
    }));
    setDidEdit(prevEdit=>({
      ...prevEdit,
      [identifier]: false
    }))
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
          onBlur={() => handleInputBlur('email')}
          onChange={(event)=> handleInputChange('email',event.target.value)}
          value={enteredValues.email}
          error={emailIsInvalid && 'Please enter a vaild email'}
        />

        <Input 
            label='Password'
            id="password" 
            type="password" 
            name="password" 
            onChange={(event)=> handleInputChange('password',event.target.value)}
            onBlur = {()=> handleInputBlur('password')}
            value={enteredValues.password}
            error={passwordIsInvalid && "Please enter a valid email"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type="submit" >Login</button>
      </p>
    </form>
  );
}
