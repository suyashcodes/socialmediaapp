import Posts from "../posts/Posts";
import Share from "../share/Share";
import "./feed.css"
import {PostsData} from "../../dummyData"

const Sidebar = () =>{
    return(
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {PostsData.map((p)=><Posts key={p.id} post={p}/>)}
            </div>
        </div>
    );
}

export default Sidebar