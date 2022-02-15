import React from 'react';

const CardBuilder = () => {
    let cardObj = {
        nameField: {
          value: "Isaac Carnes",
          class: "NameValue",
          style: {
            left: "1.7in",
            top: "0.1in",
            fontSize: "20px",
          },
        },
        titleField: {
            value: "FullStack Developer",
            class: "TitleValue",
            style: {
              left: "1.8in",
              top: "0.3in",
              fontSize: "11px",
            },
          },
          phoneNum1Field: {
            value: "+1 412-111-1111",
            class: "Phone1Value",
            style: {
              right: "0.15in",
              top: "0.55in",
            },
          },
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
    
      return (
        <div className="CardPage bg-light">
          <div className="CardView">
            <div className={cardObj.nameField.class} style={{...cardObj.nameField.style}}>
              {cardObj.nameField.value}
            </div>
            <div className={cardObj.titleField.class} style={{...cardObj.titleField.style}}>
              {cardObj.titleField.value}
            </div>
            <div className={cardObj.phoneNum1Field.class} style={{...cardObj.phoneNum1Field.style}}>
              {cardObj.phoneNum1Field.value}
            </div>
            <div className={cardObj.phoneNum2Field.class} style={{...cardObj.phoneNum2Field.style}}>
              {cardObj.phoneNum2Field.value}
            </div>
            <div className={cardObj.emailField.class} style={{ ...cardObj.emailField.style }}>
              {cardObj.emailField.value}
            </div>
            <div className={cardObj.emailField.class} style={{ ...cardObj.emailField.style }}>
              {cardObj.emailField.value}
            </div>
            <div className={cardObj.websiteField.class} style={{ ...cardObj.websiteField.style }}>
              {cardObj.websiteField.value}
            </div>
          </div>
        </div>
      );
};

export default CardBuilder;