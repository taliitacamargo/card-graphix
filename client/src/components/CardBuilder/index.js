import React, { useEffect, useState } from "react";

import PreferencesForm from "../PreferencesForm";

import './card.css';

import {Component, compArray} from "../../utils/cardArray";

const CardBuilder = () => {
  const [selectedLayout, setSelectedLayout] = useState(1);
  const [selectedComp, setSelectedComp] = useState(0);
  const [compName, setCompName] = useState("Layouts");
  const [currentProps, setCurrentProps] = useState([]);


  const createPreferenceForm = (comp) => { //Needs to return objects and needs to not call multiple times
    if(selectedLayout === 0){
      return <></>;
    }
    let parsed = JSON.parse(comp.compStyle);
    let propForms = [];
    if(comp.compClass !== "Background" && comp.compClass !== "Logo"){ //Doesnt include textContent for background and logo
      propForms.push({compClass: comp.compClass, compProp: "textContent", compValue: comp.compValue})
    }

    for (const property in parsed) {
      propForms.push({compClass: comp.compClass, compProp: property, compValue: parsed[property]});
    }

    setCurrentProps(propForms);
    setCompName(comp.compClass);
    console.log(propForms);
    return propForms;
  };

  const CreateCardComp = (item, i) => {
    if(item.compClass === "Logo"){
      return <div className={item.compClass} style={JSON.parse(item.compStyle)} key={i}>
      <img alt="logo"></img>
      </div>
    } else {
    return <div className={item.compClass} style={JSON.parse(item.compStyle)} key={i}>
      {item.compValue}
    </div>
    }
  };

  const cardComps = compArray[selectedLayout].map((item, i) => ( //Fill card with component from compArray[layout]
    CreateCardComp(item, i)
  ));

  const preferences = currentProps.map((item, i) => (
    <PreferencesForm key={i} {...item} />
  ));

  const BuildCompButton = (item, i) => {
    if(selectedLayout === 0){
      return <></>;
    }
     return <button key={i} onClick={(e) => {
      e.preventDefault();
      setSelectedComp(i)
    }}>{item.compClass}</button>
  }
  
  const componentButtons = compArray[selectedLayout].map((item, i) => (
    BuildCompButton(item, i)
  ));
  
  useEffect(() => { //When selectedComp is updated, make preference form
    createPreferenceForm(compArray[selectedLayout][selectedComp]);
  }, [selectedLayout, selectedComp]);

  useEffect(() => {
    console.log(currentProps);
  }, [currentProps]);

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