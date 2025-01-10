import { useState } from "react";

export function useInput(defalutValue , validationFn){
    const [enteredValue,setEnteredValue] = useState(defalutValue);

    const [didEdit,setDidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue)

      function handleInputBlur(event){
        setEnteredValue(event.target.value);
        setDidEdit(false);
      }
    
      function handleInputChange(){
        setDidEdit(false);
      }
  return{
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid
  };
}