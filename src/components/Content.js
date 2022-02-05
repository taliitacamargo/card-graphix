import React from 'react';


export default function Content({currentPage, setCurrentPage}){
    let contentStyle = "PageContent bg-light w-75 h-75"
    if(currentPage === "cardDesign"){
        return(
        <div className={contentStyle}>Page Design</div>
        )
    } else if(currentPage === "login"){
        return(
        <div className={contentStyle}>login</div>
        )
    } else {
        return <div className={contentStyle}>No page named {currentPage}</div>
    }
}