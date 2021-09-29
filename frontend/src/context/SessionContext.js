import React,{useState} from 'react'
const Context = React.createContext({})
export function SessionContext({children}) {
    const [jwt,setJWT]=useState(()=>window.sessionStorage.getItem('jwt'))
    let userlogin = {}
    if( window.localStorage.getItem("userLogin") )
        userlogin=JSON.parse(window.localStorage.getItem("userLogin")) 
    const [userLogin,setUserLogin]=useState(userlogin)
    return <Context.Provider value={{jwt,setJWT,userLogin,setUserLogin}}>
        {children}
    </Context.Provider>
}
export default Context