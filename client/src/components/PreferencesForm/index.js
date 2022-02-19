import React, {useState} from 'react';

const PreferencesForm = ({compClass, compProp, compValue}) => {
  const [currentVal, setCurrentVal] = useState(compValue);
  
  const changeValue = (className, property, e) => {
    e.preventDefault();
    setCurrentVal(e.target.value)

    //React dom find by class name, replace property value with new value, or add value if not already in it
    let target = document.getElementsByClassName(className)[0];
    if(target && compProp === "textContent"){
      target.textContent = e.target.value;
      return true;
    } if(target && compProp === "backgroundColor"){
      target.style.backgroundColor = e.target.value;
      return true;
    } else if(target && compProp === "fontSize"){
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

export default PreferencesForm;
