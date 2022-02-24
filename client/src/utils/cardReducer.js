import { useReducer } from "react";

let initialState = [
  [
    [
      "Select A Layout To Get Started",
      "SampleText",
      {
        left: "12%",
        top: "45%",
        fontSize: "17px",
      },
    ],
  ],
  [
    [
      "",
      "Background",
      {
        height: "100%",
        width: "40%",
        backgroundColor: "black",
        left: "0%",
        top: "0%",
      },
    ],
    [
      "",
      "Logo",
      {
        height: "1in",
        width: "1in",
        left: "5.5%",
        top: "25%",
        backgroundColor: "",
      },
    ],
    [
      "Mac Jones",
      "Name",
      {
        left: "52%",
        top: "5%",
        fontSize: "20px",
        color: "black",
      },
    ],
    [
      "FullStack Developer",
      "Title",
      {
        left: "52%",
        top: "16%",
        fontSize: "11px",
        color: "black",
      },
    ],
    [
      "+1 412-111-1111",
      "Primary Phone",
      {
        right: "4%",
        top: "33%",
        color: "black",
      },
    ],
    [
      "+1 412-222-2222",
      "Secondary Phone",
      {
        right: "4%",
        top: "38%",
        color: "black",
      },
    ],
    [
      "user56@hotmail.com",
      "Email",
      {
        right: "4%",
        top: "53%",
        color: "black",
      },
    ],
    [
      "user56.github.io/MyPortfolio/",
      "Website",
      {
        right: "4%",
        top: "58%",
        color: "black",
      },
    ],
    [
      "83 Park Place",
      "Primary Address",
      {
        right: "4%",
        top: "73%",
        color: "black",
      },
    ],
    [
      "22 Atlantic Avenue",
      "Secondary Address",
      {
        right: "4%",
        top: "78%",
        color: "black",
      },
    ],
  ],
  [
    [
      "",
      "Background",
      {
        height: "50%",
        width: "100%",
        backgroundColor: "lightgreen",
        left: "0%",
        top: "0%",
      },
    ],
    [
      "",
      "Logo",
      {
        height: ".99in",
        width: "1in",
        left: "0%",
        top: "0%",
        backgroundColor: "",
      },
    ],
    [
      "John Doe",
      "Name",
      {
        fontSize: "20px",
        left: "12%",
        top: "55%",
        color: "black",
      }
    ],
    [
      "FullStack Developer",
      "Title",
      {
        fontSize: "11px",
        left: "12%",
        top: "65%",
        color: "black",
      }
    ],
    [
      "+1 412-111-1111",
      "Primary Phone",
      {
        right: "4%",
        top: "60%",
        color: "black",
      },
    ],
    [
      "user56@hotmail.com",
      "Email",
      {
        right: "4%",
        top: "55%",
        color: "black",
      },
    ],

    [
      "83 Park Place",
      "Primary Address",
      {
        right: "4%",
        top: "75%",
        color: "black",
      },
    ],
    [
      "22 Atlantic Avenue",
      "Secondary Address",
      {
        right: "4%",
        top: "80%",
        color: "black",
      },
    ],
  ],
  [
    [
      "Mac Jones",
      "Name",
      {
        left: "10%",
        top: "15%",
        fontSize: "17px",
        zIndex: "2",
        color: "white",
      },
    ],

    [
      "FullStack Developer",
      "Title",
      {
        left: "7%",
        top: "25%",
        fontSize: "11px",
        zIndex: "1",
        color: "black",
      },
    ],
    [
      "",
      "Logo",
      {
        height: ".99in",
        width: "1.8in",
        left: "50%",
        top: "0%",
        backgroundColor: "",

      },
    ],
    [
      "",
      "Background",
      {
        height: "50%",
        width: "50%",
        backgroundColor: "lightblue",
        left: "0%",
        top: "0%",

      },
    ],
    [
      "+1 412-111-1111",
      "Primary Phone",
      {
        right: "44%",
        top: "60%",
        color: "black",
      },
    ],
    [
      "user56@hotmail.com",
      "Email",
      {
        right: "39%",
        top: "65%",
        color: "black",
      },
    ],
    [
      "83 Park Place",
      "Primary Address",
      {
        right: "43%",
        top: "80%",
        color: "black",
      },
    ],
    [
      "22 Atlantic Avenue",
      "Secondary Address",
      {
        right: "40.7%",
        top: "85%",
        color: "black",
      },
    ],
  ],
  [
    [
      "",
      "Background",
      {
        height: "100%",
        width: "100%",
        backgroundColor: "darkblue",
        left: "0%",
        top: "0%",

      },
    ],
    [
      "Mac Jones",
      "Name",
      {
        left: "36%",
        top: "35%",
        fontSize: "17px",
        color: "white",
        zIndex: "2",
        
      },
    ],
    [
      "FullStack Developer",
      "Title",
      {
        left: "33%",
        top: "45%",
        fontSize: "11px",
        color: "white",
        zIndex: "1",
      },
    ],
    [
      "",
      "Logo",
      {
        height: "2in",
        width: "3.5in",
        left: "0%",
        top: "0%",
        backgroundColor: "",
        zIndex: "0",
      },
    ],
  
    [
      "+1 412-111-1111",
      "Primary Phone",
      {
        right: "70%",
        top: "75%",
        color: "white",
      },
    ],
    [
      "user56@hotmail.com",
      "Email",
      {
        right: "70%",
        top: "81%",
        color: "white",
      },
    ],
    [
      "1223 Sandmeyer Ln",
      "Primary Address",
      {
        right: "5%",
        top: "75%",
        color: "white",
      },
    ],
    [
      "Philadelphia, PA 19115",
      "Secondary Address",
      {
        right: "5%",
        top: "81%",
        color: "white",
      },
    ],
  ],
];

/*<div className={classname} style={{style}}>Value</div>*/

export const cardReducer = (state, action) => {
  switch (action.type) {
    case "card-layout":
      return Object.assign([...state], {
        [action.selectedLayout]: Object.assign([...state[action.selectedLayout]], {
          [action.selectedComp]: action.newValue
        })
      })
    default:
      return state;
  }
};

export function useCardReducer() {
  return useReducer(cardReducer, initialState);
}
