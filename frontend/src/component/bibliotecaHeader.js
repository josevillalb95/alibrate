import React from 'react'
import { BiEdit } from 'react-icons/bi';
import {BsBook,BsFlag} from 'react-icons/bs'
import {FiFeather} from 'react-icons/fi'
import Icono from '../component/icono'
import BibliotecaHistoria from'./bibliotecaHistorial'
export default function bibliotecaHeader({usuario}){
    let iconos=[
        {
            "link":"/biblioteca",
            "icono":BsBook,
            "text":"Mis eBooks",
            "id":344
        },
        {
            "link":"/biblioteca",
            "icono":FiFeather,
            "text":"Mis Textos",
            "id":331232
        },
        {
            "link":"/biblioteca",
            "icono":BsFlag,
            "text":"Reto de lectura",
            "id":5442
        }
       
    ]
    return (

        <div>
            <div className="bibliotecaHeader">
                <img src={usuario.img} />
                <div>
                    <span className="titulo">{usuario.name} {usuario.lastname} <BiEdit/> </span>
                    <span className="min">26 años</span>
                    <span className="min light-blue">Editar generos favoritos</span>
                </div>
                <button className="v1" >Invitar amigos</button>
            </div>
            <BibliotecaHistoria />
            <div className="bibliotecaIconos"> {   iconos.map(icono=>  <Icono key={icono.id}  icono={icono}  /> )  }</div>

           
            
        </div>
    )
}
