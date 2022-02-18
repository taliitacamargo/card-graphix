import React, {useEffect, useState} from 'react';

const PrefrencesForm = ({compClass, compProp, compValue}) => {

  const changeValue = (className, property, e) => {
    e.preventDefault();
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
    <form>
      <label>{compProp}</label>
      <input 
      type="text"
      value={compValue}
      onChange={(e) => changeValue(compClass, compProp, e)}
      />
    </form>
  )
};

export default PrefrencesForm;
