import React from 'react';


export default function Content({currentPage, setCurrentPage}){
    if(currentPage === "pageDesign"){
        return(
        <div>Page Design</div>
        )
    } else if(currentPage === "login"){
        return(
        <div>login</div>
        )
    }
}