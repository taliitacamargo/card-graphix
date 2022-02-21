import React, { useEffect, useState } from "react";
import Pdf from "./pdf"
import PreferencesForm from "../PreferencesForm";

import './card.css';

const CardBuilder = () => {
  const [selectedComp, setSelectedComp] = useState(3);
  const [compName, setCompName] = useState("Please Select A Coponent");
  const [currentProps, setCurrentProps] = useState([]);

  class Component {
    constructor(compValue, compClass, compStyle) {
      this.compValue = compValue;
      this.compClass = compClass;
      this.compStyle = compStyle;
    }
  }

  let compArray = [
    new Component(
      "",
      "Background",
      JSON.stringify({
        height: "100%",
        width: "45%",
        backgroundColor: "black",
        left: "0in",
        top: "0in",
      })
    ),
    new Component(
      "",
      "Logo",
      JSON.stringify({
        height: "1in",
        width: "1in",
        backgroundColor: "",
        left: "0.3in",
        top: "0.5in",
      })
    ),
    new Component(
      "Mac Jones",
      "NameValue",
      JSON.stringify({
        left: "1.8in",
        top: "0.1in",
        fontSize: "20px",
      })
    ),
    new Component(
      "FullStack Developer",
      "TitleValue",
      JSON.stringify({
        left: "1.8in",
        top: "0.3in",
        fontSize: "11px",
      })
    ),
    new Component(
      "+1 412-111-1111",
      "Phone1Value",
      JSON.stringify({
        right: "0.15in",
        top: "0.65in",
      })
    ),
    new Component(
      "+1 412-222-2222",
      "Phone2Value",
      JSON.stringify({
        right: "0.15in",
        top: "0.75in",
      })
    ),
    new Component(
      "user56@hotmail.com",
      "EmailValue",
      JSON.stringify({
        right: "0.15in",
        top: "1.05in",
      })
    ),
    new Component(
      "user56.github.io/MyPortfolio/",
      "WebsiteValue",
      JSON.stringify({
        right: "0.15in",
        top: "1.15in",
      })
    ),
    new Component(
      "83 Park Place",
      "Address1Value",
      JSON.stringify({
        right: "0.15in",
        top: "1.45in",
      })
    ),
    new Component(
      "22 Atlantic Avenue",
      "Address2Value",
      JSON.stringify({
        right: "0.15in",
        top: "1.55in",
      })
    ),
  ];

  const createPreferenceForm = (comp) => { //Needs to return objects and needs to not call multiple times
    let parsed = JSON.parse(comp.compStyle);
    let propForms = [];
    if(comp.compClass !== "Background" && comp.compClass !== "Logo"){ //Doesnt include textContent for background and logo
      propForms.push({compClass: comp.compClass, compProp: "textContent", compValue: comp.compValue})
    }

    for (const property in parsed) {
      propForms.push({compClass: comp.compClass, compProp: property, compValue: parsed[property]}        );
    }

    setCurrentProps(propForms);
    setCompName(comp.compClass);
    console.log(propForms);
    return propForms;
  };

  const cardComps = compArray.map((item, i) => (
    <div className={item.compClass} style={JSON.parse(item.compStyle)} key={i}>
      {item.compValue}
    </div>
  ));

  const preferences = currentProps.map((item, i) => (
    <PreferencesForm key={i} {...item} />
  ));

  useEffect(() => { //When selectedComp is updated, make preference form
    createPreferenceForm(compArray[selectedComp]);
  }, [selectedComp]);

  useEffect(() => {
    console.log(currentProps);
  }, [currentProps]);

  return (
    <div className="app">
      <div className="CardPage">
        <div className="CardView">
          {cardComps}
        </div>
        <div className="PreferencesForm">
          <div>{compName}</div>
          {preferences}
        </div>
      </div>
        <Pdf/>
    </div>
  
  );
};

export default CardBuilder;