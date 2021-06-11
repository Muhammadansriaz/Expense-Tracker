import React,{createContext,useState} from 'react'
export const TransContex = createContext()
export const TransProvider = (props)=>{
    let[trans,add_trans] = useState([]);
    return(
        <div>
            <TransContex.Provider value = {[trans,add_trans]}>
            {props.children}
        </TransContex.Provider>
        </div>
    )
}

