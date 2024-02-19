import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./profile.css"

const Profile = () =>{
    return(
        <>
            <Topbar/>
            <div className="profile" >
                <Sidebar/>
                <div className="profileRight">
                <div className="profileRightTop">
                <div className="profileCover">

                    <img className="profileUserImg" src="assets/person/7.jpeg" alt="" />
                    <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Elon Musk</h4>
                    <p className="profileInfoDesc">Hello My Friends</p>
                </div>
                </div>
                <div className="profileRightBottom">
                    <Rightbar/>
                    <Feed/>
                </div>
                </div>
            </div>
        </>
    );
}

export default Profile