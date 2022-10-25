    import { useState, useEffect } from "react";

    import GlobalContext from "./GlobalContext";

    export default function ContextWrapper(props){
        const [subreddit, setSubreddit] = useState('sgexams');
        return (
            <GlobalContext.Provider value={{
                subreddit,
                setSubreddit,
                }}>
                {props.children}
            </GlobalContext.Provider>
        );
    }