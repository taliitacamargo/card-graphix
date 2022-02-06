import React from 'react';
import Login from './Login'
import SignUp from './SignUp';

export default function Content({currentPage, setCurrentPage}){
    let contentStyle = "PageContent bg-light w-75 h-75"
    if(currentPage === "cardDesign"){
        return(
        <div className={contentStyle}>Page Design</div>
        )
    } else if(currentPage === "signIn"){
        return(
        <div className={contentStyle}><SignUp/></div>
        )
    } else {
        return <div className={contentStyle}><Login/>{currentPage}</div>
    }
}