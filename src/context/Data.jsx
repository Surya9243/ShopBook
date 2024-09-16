import { createContext } from "react";
import { useState } from "react";

export const dataProvider = createContext();

function Data({children}){
    const [name , setName] = useState([])
    
    return(
        <dataProvider.Provider value = {{name ,setName}}>
            {children}
        </dataProvider.Provider>
    )
}
export default Data ;