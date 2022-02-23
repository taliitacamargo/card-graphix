import React, { useEffect, useState } from "react";
import { useCardReducer } from '../../utils/cardReducer';
import Pdf from "./pdf"
import PreferencesForm from "../PreferencesForm";
import Cloudinary from '../Cloudinary';

import './card.css';

import {compArray} from "../../utils/cardArray";

import {transparent, layout0, layout1} from "../../assets/index.js";

const CardBuilder = () => {
  const [state, dispatch] = useCardReducer();
  const [selectedLayout, setSelectedLayout] = useState(0);
  const [currentLayout, setCurrentLayout] = useState(state[selectedLayout]);
  const [selectedComp, setSelectedComp] = useState(0);
  const [currentComp, setCurrentComp] = useState(state[selectedLayout][selectedComp]);
  const [compValue, setCompValue] = useState(state[selectedLayout][selectedComp][0]);
  const [compClass, setCompClass] = useState(state[selectedLayout][selectedComp][1]);
  const [compProps, setCompProps] = useState(state[selectedLayout][selectedComp][2]);

  const [currentLogo, setCurrentLogo] = useState(transparent);

  /* LAYOUT SELECTOR */
  const layoutImages = [layout0, layout1];
  const CreateLayoutSelector = (item, i) => {
    if(selectedLayout !== 0){
      return <></>;
    } else {
      let tempKey = "layout" + i;
      return <button key={tempKey} onClick={(e) => (e.preventDefault, setSelectedLayout(i))}><img src={item}></img></button>;
    }
  }

  const layoutSelector = layoutImages.map((item, i) => CreateLayoutSelector(item, i));

  //dispatch({type: "card-layout", selectedLayout: 0, selectedComp: 0, newValue: ["Micky", "Name", {left: "10%", top: "5%"}]});
  //console.log(dispatch({type: 'card-layout', selectedLayout: 0, layout: ["new comp", "heyyy", {top: "4%", left: "10%"}]}));

  const CreateCardComp = (item, i) => {
    if(item[1] === "Logo"){
      return <img alt="logo" className={item[1]} style={item[2]} key={i} src={currentLogo}></img>
    } else {
    return <div className={item[1]} style={item[2]} key={i}>
      {item[0]}
    </div>
    }
  };

  const cardComps = currentLayout.map((item, i) => ( //Fill card with component from compArray[layout]
    CreateCardComp(item, i)
  ));

  /*const ChangePropValue = (prop, value) => {
    setCurrentProps({...currentProps, prop: value})
  }*/ //Need to send function that changes state variable
  
  /* PREFERENCES EDITOR */
  const BuildPreferences = (item, value, index) => {
    if(item === "textContent" && value === ""){
      return <div></div>
    }
    let tempObj = { compClass: compClass, compProp: item, compValue: value, compIndex: index};
    return <PreferencesForm key={index} {...tempObj} />
  } 

  const textEdit = BuildPreferences("textContent", compValue, 0);

  const preferences = Object.keys(compProps).map((item, i) => (
    BuildPreferences(item, compProps[item], (i + 1))
  ));
  
  /* COMPONENT BUTTONS */
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

  const SetLogo = (path) => {
    setCurrentLogo(path);
  };

  const UtilityButtons = () => {
    if(selectedLayout === 0){
      return <></>
    } else {
      return <div>
        <Pdf/>
        <Cloudinary SetLogo={SetLogo}/>
      </div>
    }
  }
  /* useEffect Pipeline */
  useEffect(() => {
    setCurrentLayout(state[selectedLayout]);
    if(selectedComp !== 0){
      setSelectedComp(0);
    } else {
      setCurrentComp(state[selectedLayout][0]); //0 can be assumed
    }
  }, [selectedLayout])

  useEffect(() => {
    setCurrentComp(state[selectedLayout][selectedComp]);
  }, [selectedComp])

  useEffect(() => {
    setCompValue(currentComp[0]);
    setCompClass(currentComp[1]);
    setCompProps(currentComp[2]);
  }, [currentComp]);
  /*
  useEffect(() => { //When selectedComp is updated, make preference form
    createPreferenceForm(layoutsArray[selectedLayout][selectedComp]);
  }, [layoutsArray, selectedLayout, selectedComp]);

  useEffect(() => {
    console.log(currentProps);
  }, [currentProps])
  */
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
          <div>{compClass}</div>
          {textEdit}
          {preferences}
        </div>
        <div className="LayoutSelector">
          {layoutSelector}
        </div>
      </div>
      {UtilityButtons()}
    </div>
  );
};
export default CardBuilder;