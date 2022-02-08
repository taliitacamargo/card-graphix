import '../css/Header.css';

import Nav from './Nav';

export default function Header({setCurrentPage}){
    return(
        <div className="Header bg-dark text-white m-4">
            <h1>Card Graphix</h1>
            <Nav setCurrentPage={setCurrentPage} />
        </div>
    )
}