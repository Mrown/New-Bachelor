import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../pages/firebase.config";
import { Post } from "./Post";

function Posts() {
    const [realtimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp", "descending")
    )
    return <div>
        {realtimePosts.docChanges.map(post =>(
            <Post 
            key={post.id}
            name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image={post.data().image}
            />
        ))}
    </div>;
}

export default Posts;