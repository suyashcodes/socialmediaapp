import "./rightbar.css"
import Users from "../../dummyData"
import Online from "../online/Online";
const Rightbar = () =>{
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdateContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdaytext"><b>Palo Morjo</b> and <b>3 other friends</b> have birthday today</span>
                </div>
                <img src="assets/ad.png" className="rightbarAd" alt=""/>
                <h4 className="rightbarTitle">Online Friend</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=><Online key={u.id} user={u} />)}
                </ul>
            </div>
        </div>
    );
}

export default Rightbar