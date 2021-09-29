import React,{useState} from 'react'
import {  Link } from "wouter";
import useSession from '../../hooks/useSession'


export default function Index() {
    const {login,msjServer}=useSession()
    const [user,setUser]=useState("")
    const [password,setPasword]=useState("")

    const changeLogin=(e)=>{
        e.preventDefault()
        if(!user || !password)
            return console.log("datos incompletos")

        login({user,password})
    }


    return (
        <div className="containerLogin">
            <div className="containerLogo">
                <div className="logo">
                    <img src="https://cdn.alibrate.com/images/AlibrateLogoWhite.svg" alt="Alibrate Logo" />
                    <p >La App para los amantes de los libros.</p>
                    <div className="line-short"></div>
                </div>
            </div>

           
            <div className="formLogin">
                <form onSubmit={changeLogin}>
                    <span>Inicia sesión</span>
                    <input type="text" onChange={ (e)=>{setUser(e.target.value)} } placeholder="Ingresa usuario o e-mail" />
                    <input  type="password"  onChange={ (e)=>{setPasword(e.target.value)} } placeholder="Ingresa tu contraseña" />
                    <button className="buttonLogin">Iniciar Sesión</button>
                </form>
                <span className="registro">{msjServer?msjServer:null}</span>
                <span className="forgotPass">¿Olvidaste tu contraseña?</span>
                <div className="divider"><div className="line"></div><span>o ingresa con</span><div className="line"></div></div>
                <button className="buttonLogin facebook" >Facebook</button>

            </div>
            <span className="registro">¿Aún no tienes cuenta? <Link to="/registro">Registrate</Link></span>

        </div>

    )
}
