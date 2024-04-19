    import { useState, useEffect } from "react";

    import GlobalContext from "./GlobalContext";

    export default function ContextWrapper(props){
        const [subreddit, setSubreddit] = useState('all');
        const [profileIconColour, setProfileIconColour] = useState('rgb(0,0,0)');
        const [deployment, setDeployment] = useState('vercel');
        return (
            <GlobalContext.Provider value={{
                subreddit,
                setSubreddit,
                profileIconColour,
                setProfileIconColour,
                deployment,
                setDeployment,
                }}>
                {props.children}
            </GlobalContext.Provider>
        );
    }