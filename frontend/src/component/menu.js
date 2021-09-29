import React ,{useContext} from 'react'
import Icono from './icono'
import {  FaExchangeAlt} from 'react-icons/fa';
import { VscLibrary } from 'react-icons/vsc';
import { AiOutlineUnorderedList ,AiOutlineInfoCircle,AiOutlinePoweroff} from 'react-icons/ai';
import { BsSearch,BsPeople } from 'react-icons/bs';
import { BiMessageSquare } from 'react-icons/bi';
import {ImStack} from 'react-icons/im';
import  SessionContext  from '../context/SessionContext'
import CardUser from './cardUser';
import useSession from '../hooks/useSession'
import { useLocation } from "wouter"

export default function Menu({setMenu}) {
    const [_, pushLocation] = useLocation()

    const {userLogin }=useContext(SessionContext);
    const {logout}=useSession()
    const changeMenu=(event)=>{
        setMenu(false)
    }
    const closeSession=()=>{
        logout()
        pushLocation(`/`)

    }
    let nav=[
        {
            "link":"/biblioteca",
            "icono":VscLibrary,
            "text":"Club de lectura",
            "id":2231
        },{
            "link":"/biblioteca",
            "icono":FaExchangeAlt,
            "text":"Intercambio de libros",
            "id":332
        },
        {
            "link":"/busquedaAvanzada",
            "icono":BsSearch,
            "text":"Busqueda Avanzada",
            "id":5522
        },
        {
            "link":"/biblioteca",
            "icono":ImStack,
            "text":"Recomendaciones",
            "id":154
        },
        {
            "link":"/ranking",
            "icono":AiOutlineUnorderedList,
            "text":"Listas",
            "id":3435
        },
        {
            "link":"/textos",
            "icono":BsPeople,
            "text":"Comunidad",
            "id":4543
        },
        {
            "link":"/textos",
            "icono":BiMessageSquare,
            "text":"Mensajes",
            "id":4343
        },
        {
            "link":"/busquedaAvanzada",
            "icono":BsSearch,
            "text":"Explorar",
            "id":5922
        }
    ]
   
    return (
        <div className="menu" onClick={changeMenu}   >
          
            <div className="lista"  >
                <CardUser  usuario={userLogin}/>
                {   nav.map(icono=>
                        <Icono key={icono.id}  icono={icono}  />
                    )
                }
                <div className="listaBottom">
                    <button><AiOutlineInfoCircle/><span>Ayuda</span></button>
                    <button onClick={closeSession}><AiOutlinePoweroff/><span>Cerrar sesión</span></button>
                </div>
            </div>
            
        </div>
    )
}




