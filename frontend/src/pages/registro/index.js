import React,{useState} from 'react'
import {  Link } from "wouter";
import useSession from '../../hooks/useSession'


export default function Index() {
    const {registro,msjServer}=useSession()
    const [user,setUser]=useState("")
    const [nombre,setNombre]=useState("")
    const [apellido,setApellido]=useState("")
    const [password,setPasword]=useState("")

    const changeLogin=(e)=>{
        e.preventDefault()
        if(!user || !password || !nombre || !apellido)
            return console.log("datos incompletos")
        registro({user,nombre,apellido,password})
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
                    <span>Regístrate </span>
                    <input type="text" onChange={ (e)=>{setUser(e.target.value)} } placeholder="Ingresa usuario" />
                    <input type="text" onChange={ (e)=>{setNombre(e.target.value)} } placeholder="Ingresa nombre" />
                    <input type="text" onChange={ (e)=>{setApellido(e.target.value)} } placeholder="Ingresa apellido" />
                    <input  type="password"  onChange={ (e)=>{setPasword(e.target.value)} } placeholder="Ingresa tu contraseña" />
                    <button className="buttonLogin">Crear cuenta</button>
                </form>
            </div>
            <span className="registro">¿Ya tienes cuenta?  <Link to="/">Iniciar sesión</Link></span>
            <span className="registro">{msjServer?msjServer:null}</span>

        </div>

    )
}
