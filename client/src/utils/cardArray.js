class Component {
  constructor(compValue, compClass, compStyle) {
    this.compValue = compValue;
    this.compClass = compClass;
    this.compStyle = compStyle;
  }
}

let compArray = [
  [
    new Component(
      "Select A Layout To Get Started",
      "SampleText",
      JSON.stringify({
        left: "12%",
        top: "45%",
        fontSize: "17px",
      })
    ),
  ],
  [
    new Component(
      "",
      "Background",
      JSON.stringify({
        height: "100%",
        width: "40%",
        backgroundColor: "black",
        left: "0%",
        top: "0%",
      })
    ),
    new Component(
      "",
      "Logo",
      JSON.stringify({
        height: "1in",
        width: "1in",
        left: "5.5%",
        top: "25%",
        backgroundColor: "",
      })
    ),
    new Component(
      "Mac Jones",
      "NameValue",
      JSON.stringify({
        left: "52%",
        top: "5%",
        fontSize: "20px",
      })
    ),
    new Component(
      "FullStack Developer",
      "TitleValue",
      JSON.stringify({
        left: "52%",
        top: "16%",
        fontSize: "11px",
      })
    ),
    new Component(
      "+1 412-111-1111",
      "Phone1Value",
      JSON.stringify({
        right: "4%",
        top: "33%",
      })
    ),
    new Component(
      "+1 412-222-2222",
      "Phone2Value",
      JSON.stringify({
        right: "4%",
        top: "38%",
      })
    ),
    new Component(
      "user56@hotmail.com",
      "EmailValue",
      JSON.stringify({
        right: "4%",
        top: "53%",
      })
    ),
    new Component(
      "user56.github.io/MyPortfolio/",
      "WebsiteValue",
      JSON.stringify({
        right: "4%",
        top: "58%",
      })
    ),
    new Component(
      "83 Park Place",
      "Address1Value",
      JSON.stringify({
        right: "4%",
        top: "73%",
      })
    ),
    new Component(
      "22 Atlantic Avenue",
      "Address2Value",
      JSON.stringify({
        right: "4%",
        top: "78%",
      })
    ),
  ],
];

/*<div className={classname} style={{style}}>Value</div>*/

export {Component, compArray};