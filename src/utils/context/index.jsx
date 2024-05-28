import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [logements, setLogements] = useState([])

    /*useEffect(() => {
        async function fetchLogement() {
            let ignore = false;
            try{
                const response = await fetch("logements.json")
                const { logements } = await response.json()
                if(!ignore)setLogements(logements);
            }
            catch(error) {
                console.log(error)
            }
            finally {
                return () => {ignore=true};
            }
        };
        fetchLogement()
    }, [])*/

    useEffect(
        () => {
        let ignore = false;
        fetch("logements.json")
            .then(response => response.json())
            .then(data => {if(!ignore)setLogements(data);})
            return () => {ignore=true};
    },[])

    console.log(logements);


    return (
        <DataContext.Provider value={{ logements }}>
            {children}
        </DataContext.Provider>
    );
};