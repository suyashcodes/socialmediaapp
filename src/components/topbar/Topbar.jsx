import React from "react";
import "../topbar/topbar.css"
import { Chat, Notifications, Person, Search } from "@material-ui/icons";
const Topbar = ()=>{
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Logoname</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input className="searchInput" type="text" placeholder="Search for friend,post or video"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">About</span>
                    <span className="topbarLink">Contact</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIcon">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIcon">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIcon">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="ProfileNotFound" className="topbarImg" />
            </div>
        </div>
    );
}

export default Topbar