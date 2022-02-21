import React from "react";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';

const doc = new jsPDF();
const Pdf = <div className = "CardView"></div>;



export default function App() {
const exportPdf = () => {
    html2canvas(document.querySelector(".CardView")).then(canvas => {
        document.body.appendChild(canvas);
        const img = canvas.toDataURL('image/png');
        const doc = new jsPDF();
        doc.addImage(img, 'PNG', 0,0);
        doc.save("myBusinessCard.pdf")
    })
}

    return (
        <div  className = "text-center">
            <button  type="button" className="btn btn-primary" onClick = {exportPdf}>Export to PDF</button>
        </div> 
    )
}