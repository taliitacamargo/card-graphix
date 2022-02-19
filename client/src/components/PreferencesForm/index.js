import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


const PrefrencesForm = ({compClass, compProp, compValue}) => {
  const [currentVal, setCurrentVal] = useState(compValue);
  const changeValue = (className, property, e) => {
    e.preventDefault();
    setCurrentVal(e.target.value)
    let propName = "";
    switch (property) {
      case "fontSize":
        propName = "font-size";
        break;
      default:
        propName = property;
    }

    //React dom find by class name, replace property value with new value, or add value if not already in it
    let target = document.getElementsByClassName(className)[0];
    if(target && propName === "textContent"){
      target.textContent = e.target.value;
      return true;
    } else if(target && propName === "font-size"){
      target.style.fontSize = e.target.value;
      return true;
    } else if (target) {
      target.style.setProperty(property, e.target.value);
      return true; //Success
    }
    return false; //False
  };

  return(
    <form className='d-flex flex-column' onSubmit={e => e.preventDefault()}>
      <label className='bg-secondary'>{compProp}</label>
      <input 
      type="text"
      defaultValue={currentVal}
      onChange={(e) => changeValue(compClass, compProp, e)}
      />
    </form>
  )
};

export default PrefrencesForm;
