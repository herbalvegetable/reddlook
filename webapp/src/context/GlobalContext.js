import React from "react";

const GlobalContext = React.createContext({
    subreddit: '',
    profileIconColour: '',
    deployment: '',
});

export default GlobalContext;