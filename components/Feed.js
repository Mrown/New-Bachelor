import Topstories from "../components/Topstories";
import Inputbox from "../components/Inputbox";
import Posts from "../components/Posts";


import {getSession, signIn, signOut, useSession} from "next-auth/react";

function Feed() {
    const {data : session} = useSession()

    return(
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
        {!session ? 
        (<div className="flex items-center justify-center h-auto w-40 cursor-pointer rounded-md border border-y-gray-300"
        onClick={signIn}>
        <p>Log in to see the feed</p> 
        </div>)
        
        
        : 
        
        (
        
        <div>
            {/* Top stories */}
            {/* <Topstories /> */}
            
            {/* Input Box */}
            <Inputbox />

            {/* Feed of Posts */}
            {/* <Posts /> */}
            
        </div>
      )}
        </div>
    )
}

export default Feed;