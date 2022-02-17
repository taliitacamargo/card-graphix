import React from 'react';

const PreferencesForm = ({components}) => {
  const createPreferenceForm = (comp) => {
    let parsed = JSON.parse(comp.compStyle);
    for (const property in parsed) {
      console.log(`${property}: ${parsed[property]}`);
      //Create form button with property as name and parsed[property] as default value, onChange call changeValue with className, the property name, and the new value
    }
    return "preferences";
  };

  const changeValue = (className, property, value) => {
    //React dom find by class name, replace property value with new value, or add value if not already in it
    return null;
  };

  let preferenceBox = 
    <div style={{ display: "flex", flexDirection: "row" }}>
      {createPreferenceForm(components[2])}
    </div>
  ;

  return ( {preferenceBox} );
};

export default PreferencesForm;
