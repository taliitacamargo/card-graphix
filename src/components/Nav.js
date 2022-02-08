import React, { useState } from 'react';

export default function Nav({setCurrentPage}){
    function navbarItem(name, pageLink){  //Name and link for state variable
        this.name = name;
        this.pageLink = pageLink;
    };

    const navItems = [ //Items and their value
     new navbarItem("Build Your Buisness Card", "cardDesign"),
     new navbarItem("Login / Create Account", "login"),
    ];

    const [selectedNav, selectNav] = useState(0); //State change for selected nav element, navItems[0] is same key as default for currentPage state

    const pickItem = (num) =>{ //Changes nav state and page state, used when nav item is clicked
        selectNav(num.i); 
        setCurrentPage(navItems[num.i].pageLink);    
    };

    //Creates h4 elements out of navItems that depend on nav state for their text color
    const navList = navItems.map((item, i) => <h4 className={selectedNav === i ? "TextSelected" : "TextNormal"} key={i} onClick={() => pickItem({i})}>{item.name}</h4>);

    return (
        <div className="NavBar">
            {navList}
        </div>
    )
}