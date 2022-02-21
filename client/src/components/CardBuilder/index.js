import React, { useEffect, useState } from "react";

import PreferencesForm from "../PreferencesForm";

import './card.css';

import {compArray} from "../../utils/cardArray";

const CardBuilder = () => {
  const [layoutsArray, setLayoutsArray] = useState(compArray);
  const [selectedLayout, setSelectedLayout] = useState(1);
  const [currentLayout, setCurrentLayout] = useState(layoutsArray[selectedLayout]);
  const [selectedComp, setSelectedComp] = useState(0);
  const [currentComp, setCurrentComp] = useState(currentLayout[selectedComp]);/*useState(currentLayout[selectedComp]);*/
  const [compName, setCompName] = useState(currentComp[1]);
  const [currentProps, setCurrentProps] = useState(currentComp[2]);


  const createPreferenceForm = (comp) => { //Needs to return objects and needs to not call multiple times
    if(selectedLayout === 0){
      return <></>;
    }
    let parsed = comp[2];
    let propForms = [];
    if(comp[1] !== "Background" && comp[1] !== "Logo"){ //Doesnt include textContent for background and logo
      propForms.push({compClass: comp[1], compProp: "textContent", compValue: comp[0]})
    }

    for (const property in parsed) {
      propForms.push({compClass: comp[1], compProp: property, compValue: parsed[property]});
    }

    setCurrentComp(comp);
    setCompName(comp[1]);
    return propForms;
  };

  const CreateCardComp = (item, i) => {
    if(item[1] === "Logo"){
      return <div className={item[1]} style={item[2]} key={i}>
      <img alt="logo"></img>
      </div>
    } else {
    return <div className={item[1]} style={item[2]} key={i}>
      {item[0]}
    </div>
    }
  };

  const cardComps = currentLayout.map((item, i) => ( //Fill card with component from compArray[layout]
    CreateCardComp(item, i)
  ));

  const BuildPreferences = (item, value, index) => {
    let tempObj = { compClass: compName, compProp: item, compValue: value, compIndex: index};
    return <PreferencesForm key={index} {...tempObj} />
  }

  const preferences = Object.keys(currentProps).map((item, i) => (
    BuildPreferences(item, currentProps[item], i)
  ));

  const BuildCompButton = (item, i) => {
    if(selectedLayout === 0){
      return <></>;
    }
     return <button key={i} onClick={(e) => {
      e.preventDefault();
      setSelectedComp(i)
    }}>{item[1]}</button>
  }
  
  const componentButtons = currentLayout.map((item, i) => (
    BuildCompButton(item, i)
  ));
  
  useEffect(() => { //When selectedComp is updated, make preference form
    createPreferenceForm(layoutsArray[selectedLayout][selectedComp]);
  }, [layoutsArray, selectedLayout, selectedComp]);

  useEffect(() => {
    setCurrentProps(currentComp[2]);
    console.log(currentComp);
  }, [currentComp]);

  useEffect(() => {
    console.log(currentProps);
  }, [currentProps])

  return (
    <div className="app">
      <div className="CardPage">
        <div className="CardView">
          {cardComps}
        </div>
        <div className="ComponentButtons">
          {componentButtons}
        </div>
        <div className="PreferencesForm">
          <div>{compName}</div>
          {preferences}
        </div>
      </div>
    </div>
  );
};

export default CardBuilder;