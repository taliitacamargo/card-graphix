import React,{useEffect} from 'react';

const CardBuilder = () => {
    class Component{
        constructor(compValue, compClass, compStyle){
            this.compValue = compValue;
            this.compClass = compClass;
            this.compStyle = compStyle;
        }
    }
    
    let compArray = [
        new Component("", "Background", JSON.stringify({
            height: "100%",
            width: "45%",
            backgroundColor: "black",
            left: "0in",
            top: "0in",
          })),
        new Component("", "Logo", JSON.stringify({
            height: "1in",
            width: "1in",
            backgroundColor: "",
            left: "0.3in",
            top: "0.5in",
          })),
        new Component("Mac Jones", "NameValue", JSON.stringify({
            left: "1.8in",
            top: "0.1in",
            fontSize: "20px",
        })),
        new Component("FullStack Developer", "TitleValue", JSON.stringify({
            left: "1.8in",
            top: "0.3in",
            fontSize: "11px",
          })),
        new Component("+1 412-111-1111", "Phone1Value", JSON.stringify({
            right: "0.15in",
            top: "0.65in",
          })),
        new Component("+1 412-222-2222", "Phone2Value", JSON.stringify({
            right: "0.15in",
            top: "0.75in",
          })),
        new Component("user56@hotmail.com", "EmailValue", JSON.stringify({
            right: "0.15in",
            top: "1.05in",
          })),
        new Component("user56.github.io/MyPortfolio/", "WebsiteValue", JSON.stringify({
            right: "0.15in",
            top: "1.15in",
          })),
        new Component("83 Park Place", "Address1Value", JSON.stringify({
            right: "0.15in",
            top: "1.45in",
          })),
        new Component("22 Atlantic Avenue", "Address2Value", JSON.stringify({
            right: "0.15in",
            top: "1.55in",
          })),
      ];

      const createPreferenceForm = (comp) => {
        /*let parsed = JSON.parse(comp.compStyle);
        let propValue = [];
        for (const property in parsed) {
          propValue.concat(<tr><th className='small text-muted pr-2' scope='row'>{property}</th>, <td>{parsed[property]}</td></tr>)
          //Create form button with property as name and parsed[property] as default value, onChange call changeValue with className, the property name, and the new
        }
        
        return <table>{propValue}</table>;*/
        return '';
      };

      const changeValue = (className, property, value) =>{
        let propName = ""
        switch(property){
          case "fontSize":
            propName = 'font-size';
            break;
          default:
            propName = property
        }
        
        //React dom find by class name, replace property value with new value, or add value if not already in it
        let target = document.getElementsByClassName(className)[0].style;
        if(target){
          target.setProperty(property, value);
          return true; //Success
        }
        return false; //False
      };

      let preferenceBox = <div style={{display: "flex", flexDirection: "row"}}>{createPreferenceForm(compArray[2])}</div>

      const cardComps = compArray.map((item, i) => <div className={item.compClass} style={JSON.parse(item.compStyle)} key={i}>{item.compValue}</div>)
    
      useEffect(() => {
        changeValue("NameValue", "fontSize", "25px");
      }, []);

      return (
        <div className="CardPage bg-light">
          <div className="CardView">
              {cardComps}
          </div>
        </div>
      );
};

export default CardBuilder;