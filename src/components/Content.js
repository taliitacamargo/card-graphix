import React from 'react';

import SignIn from './SignIn';

export default function Content({currentPage, setCurrentPage}){
    let contentStyle = "PageContent bg-dark w-75 h-75"
    if(currentPage === "cardDesign"){
        return(
        <div className={contentStyle}>Page Design</div>
        )
    } else if(currentPage === "login"){
        return(
        <div className={contentStyle}><SignIn/></div>
        )
    } else {
        return <div className={contentStyle}>No page named {currentPage} </div>
    }
}