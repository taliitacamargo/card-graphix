import React, { useEffect, useState } from "react";
import { useCardReducer } from '../../utils/cardReducer';
import Frag from '../../utils/componentUtil/frag';
import Pdf from "./pdf"
import PreferencesForm from "../PreferencesForm";
import Cloudinary from '../Cloudinary';

import { useMutation } from '@apollo/client';
import { CREATE_CARD } from '../../utils/mutations';

import './card.css';

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

  const SetProp = (prop, value) => { //Called from preferences form when field is changed
    if(prop === 'textContent' && compValue !== value){
      setCompValue(value);
    } else if(prop !== 'textContent' && compProps[prop] !== value){
      let tempProps = {...compProps};
      tempProps[prop] = value; //Does not update value if its blank
      setCompProps(tempProps);
    }
  }

  /* LAYOUT SELECTOR */
  const layoutImages = [layout0, layout1];

  const SelectLayout = (event, index) => {
    event.preventDefault();
    setSelectedLayout(index);
  }

  const CreateLayoutSelector = (item, i) => {
    if(selectedLayout !== 0){
      let tempKey = "fragment" + i;
      return <Frag key={tempKey} />;
    } else {
      let tempKey = "layout" + i;
      return <button key={tempKey} onClick={(e) => SelectLayout(e, i)}><img src={item} ></img></button>;
    }
  }

  const layoutSelector = layoutImages.map((item, i) => CreateLayoutSelector(item, i));

  //dispatch({type: "card-layout", selectedLayout: 0, selectedComp: 0, newValue: ["Micky", "Name", {left: "10%", top: "5%"}]});
  //console.log(dispatch({type: 'card-layout', selectedLayout: 0, layout: ["new comp", "heyyy", {top: "4%", left: "10%"}]}));

  const CreateCardComp = (item, i) => {
    let tempKey = "comp" + i;
    if(item[1] === "Logo"){
      return <img alt="logo" className={item[1]} style={item[2]} key={tempKey} src={currentLogo}></img>
    } else {
      return <div className={item[1]} style={item[2]} key={tempKey}>{item[0]}</div>
    }
  };

  const cardComps = currentLayout.map((item, i) => ( //Fill card with component from compArray[layout]
    CreateCardComp(item, i)
  ));
  
  /* PREFERENCES EDITOR */
  const BuildPreferences = (item, value, index) => {
    let tempKey = "pref" + index;
    if(item === "textContent" && (compClass === 'Logo' || compClass === 'Background')){
      return <Frag key={tempKey} />
    }
    let tempObj = { compClass: compClass, compProp: item, compValue: value, compIndex: index, SetProp: SetProp};
    return <PreferencesForm key={tempKey} {...tempObj} />
  } 

  const textEdit = BuildPreferences("textContent", compValue, 0);

  const preferences = Object.keys(compProps).map((item, i) => (
    BuildPreferences(item, compProps[item], (i + 1))
  ));
  
  /* COMPONENT BUTTONS */
  const BuildCompButton = (item, i) => {
    let tempKey = "btn" + i;
    if(selectedLayout === 0){
      return <Frag key={tempKey} />;
    }
     return (<button key={tempKey} onClick={(e) => {
      e.preventDefault();
      //Use Reducer to change state
      dispatch({type: "card-layout", selectedLayout: selectedLayout, selectedComp: selectedComp, newValue: [compValue, compClass, {...compProps}]});
      setSelectedComp(i);
    }}>{item[1]}</button>)
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
        <Pdf key={"exportBtn"}/>
        <Cloudinary key={"uploadBtn"} SetLogo={SetLogo}/>
      </div>
    }
  }

  /* useEffect Pipeline */
  useEffect(() => {
    setCurrentLayout(state[selectedLayout]);
  }, [state]);

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