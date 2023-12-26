import React from "react";

const IssuestManagerContext = React.createContext();

function IssuesManagerProvider({ children }) {
    const [openFloatMenu, setOpenFloatMenu] = React.useState(false);

    return (
        <IssuestManagerContext.Provider
            value={{
                openFloatMenu,
                setOpenFloatMenu
            }}
        >
            { children }
        </IssuestManagerContext.Provider>
    )
}

export {IssuestManagerContext, IssuesManagerProvider};