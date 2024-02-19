import { MoreVert } from "@material-ui/icons";
import "./posts.css"
import Users from "../../dummyData"
import { useState } from "react";

const Posts =({post})=>{
    const [like,setLike] = useState(post.like)
    const [isLike,setIsLike] = useState(false)
    const likehandler = ()=>{
        setLike(isLike ? like-1 : like+1)
        setIsLike(!isLike)
    }
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} className="postProfile" alt=""/>
                        <span className="postUserName">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img onClick={likehandler} className="likeIcon" src="assets/heart.png" alt=""/>
                        <img className="likeIcon" src="assets/like.png" alt=""/>
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts