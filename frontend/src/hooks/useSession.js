import {useContext,useCallback,useState} from 'react'
import  SessionContext  from '../context/SessionContext'
import getLogin from '../services/getLogin';
import sendRegistro from '../services/registro'
export default function useSession() {
    const {jwt,setJWT,userLogin,setUserLogin}=useContext(SessionContext);
    const [msjServer,setMsjServer]=useState("")
    const eliminarSession=() => {
        setJWT("")
        window.sessionStorage.removeItem("jwt")
        window.localStorage.removeItem("userLogin")

    }
    const logout= useCallback( ()=>{
        eliminarSession()
    })
    const login= useCallback( ({user,password})=>{
        const respLogin=getLogin({user,password})
        .then(jsonResponse=>{
            if(jsonResponse && jsonResponse["token"]){
                setJWT(jsonResponse["token"])
                setUserLogin(jsonResponse["user"])
                window.sessionStorage.setItem("jwt",jsonResponse["token"])
                window.localStorage.setItem("userLogin",JSON.stringify(jsonResponse["user"]))
            }else{
                setMsjServer(jsonResponse["error"])
                eliminarSession()
            }
        })
        .catch(err=>{
            console.log(err)
            eliminarSession()

        })
     
    },[jwt,setJWT])

    const registro= useCallback( ({user,nombre,apellido,password})=>{
        const respLogin=sendRegistro({user,nombre,apellido,password})
        .then(jsonResponse=>{
            if(jsonResponse["error"])
                setMsjServer(jsonResponse["error"])
            else  
                setMsjServer("Registro Exitoso")
            
        })
        .catch(err=>{
            setMsjServer("Registro fail")
        })
     
    },[jwt,setJWT])
    return {
        isLogin:Boolean(jwt),
        jwt,
        login,
        logout,
        registro,
        msjServer


    }

}
