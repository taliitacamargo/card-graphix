import React from 'react'
import "./instruction.css"


export default function Instruction() {
    return (
        <div className="wrapper">
            <h2>Design your Business Cards</h2>
            <h3>We have design options to help you create your own business card in minutes.</h3>
            <div className="steps">
                <div className="step1">
                    <div className="numbered-step-num"> 1 </div>
                    <div className="numbered-step-txt">
                        <p>Pick out the design.</p>
                    </div>
                </div>
                <div className="step2">
                    <div className="numbered-step-num"> 2 </div>
                    <div className="numbered-step-txt">
                        <p>Choose fields you want to add.</p>
                    </div>
                </div>
                <div className="step3">
                    <div className="numbered-step-num"> 3 </div>
                    <div className="numbered-step-txt">
                        <p>Export and done!</p>
                    </div>
                </div>

            </div>
        </div>

    )
}
