import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }){
    let id = ""

    return (
        <AppContext.Provider value={id}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext)
}