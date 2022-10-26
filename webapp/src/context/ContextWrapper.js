    import { useState, useEffect } from "react";

    import GlobalContext from "./GlobalContext";

    export default function ContextWrapper(props){
        const [subreddit, setSubreddit] = useState('all');
        const [profileIconColour, setProfileIconColour] = useState('rgb(0,0,0)');
        return (
            <GlobalContext.Provider value={{
                subreddit,
                setSubreddit,
                profileIconColour,
                setProfileIconColour,
                }}>
                {props.children}
            </GlobalContext.Provider>
        );
    }