import ReactDOMServer from "react-dom/server";
import Component from "./index"
import jsPDF from "jspdf";
import React from "react";

const doc = new jsPDF();
const Pdf = <div className = "CardView"></div>;


export default function App() {
    const exportToPDF = () => {
        doc.html (ReactDOMServer.renderToStaticMarkup(Pdf), {
            callback: () => {
                doc.save("myBusinessCard.pdf");
            }
        });
    };
    return (
        <div>
            <button onClick = {exportToPDF}>Export to PDF</button>
        </div>
    )
}