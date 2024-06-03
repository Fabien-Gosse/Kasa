import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [logements, setLogements] = useState([])

    useEffect(
        () => {
        let ignore = false;
        fetch("/logements.json")
            .then(response => {
                return response.json()
            })
            .then(data => { 
            if(!ignore)setLogements(data);})
            return () => {ignore=true};
    },[]);

    return (
        <DataContext.Provider value={{ logements }}>
            {children}
        </DataContext.Provider>
    );
};