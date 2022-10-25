import React from "react";

const GlobalContext = React.createContext({
    subreddit: '',
    profileIconColour: 'rgb(0,0,0)',
});

export default GlobalContext;