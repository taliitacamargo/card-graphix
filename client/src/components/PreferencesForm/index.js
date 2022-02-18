import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';


const PrefrencesForm = ({compClass, compProp, compValue}) => {
  const [currentVal, setCurrentVal] = useState(compValue);
  const changeValue = (className, property, e) => {
    e.preventDefault();
    setCurrentVal(e.target.value)
    console.log(className + " " + property + " " + e.target.value);
    let propName = "";
    switch (property) {
      case "fontSize":
        propName = "font-size";
        break;
      default:
        propName = property;
    }

    //React dom find by class name, replace property value with new value, or add value if not already in it
    let target = document.getElementsByClassName(className)[0].style;
    if (target) {
      target.setProperty(property, e.target.value);
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
