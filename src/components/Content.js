import React, {useState} from 'react';


export default function Content() {
    const [currentPage, setCurrentPage] = useState('Home')


    if (currentPage === "pageDesign") {
        return 
            <div>Page Design</div>
        
    } else if (currentPage === "login") {
        return 
            <div>login</div>
        
    }
}