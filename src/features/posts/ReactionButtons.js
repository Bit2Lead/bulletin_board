import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";


const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕️"
}


const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();
    const Buttons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name} onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name}))} type="button" className="reactionButton">
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div>{Buttons}</div>
}

export default ReactionButtons
