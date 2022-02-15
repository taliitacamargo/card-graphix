import React from 'react';

const CardBuilder = () => {
  class Component {
    constructor(compValue, compClass, compStyle) {
      this.compValue = compValue;
      this.compClass = compClass;
      this.compStyle = compStyle;
    }
  }
  console.log(JSON.stringify({
    left: "1.7in",
    top: "0.1in",
    fontSize: "20px",
  }));
  let compArray = [
    new Component("Isaac Carnes", "NameValue", JSON.stringify({
      left: "1.7in",
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
      top: "0.55in",
    })),
  ];

  let cardObj = {
    phoneNum2Field: {
      value: "+1 412-222-2222",
      class: "Phone2Value",
      style: {
        right: "0.15in",
        top: "0.65in",
      },
    },
    emailField: {
      value: "isaacjoshuadeveloper@gmail.com",
      class: "EmailValue",
      style: {
        right: "0.15in",
        top: "0.85in",
      },
    },
    websiteField: {
      value: "isaacjcarnes.github.io/react-portfolio-ij/",
      class: "WebsiteValue",
      style: {
        right: "0.15in",
        top: "0.95in",
      },
    },
  };

  const cardComps = compArray.map((item, i) => <div className={item.compClass} style={JSON.parse(item.compStyle)} key={i}>{item.compValue}</div>)

  return (
    <div className="CardPage bg-light">
      <div className="CardView">
        {cardComps}
      </div>
    </div>
  );
};

export default CardBuilder;