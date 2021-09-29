import {useContext} from 'react'
import setEstadoDB  from '../services/setEstado'
import getEstadoDB from '../services/getEstadoDB'
import useSession from './useSession'
import  SessionContext  from '../context/SessionContext'
const useBooksEstado = ()=>{
    const {userLogin ,setUserLogin}=useContext(SessionContext);
    const {jwt}=useSession()
    async function cambiarEstadoLibro([libro,estado]){
        await setEstadoDB(libro,userLogin._id,estado,jwt)
        const nuevoUSer=await getEstadoDB(userLogin._id,jwt)
        if(nuevoUSer && nuevoUSer._id){
            window.localStorage.setItem("userLogin",JSON.stringify(nuevoUSer))
            setUserLogin(nuevoUSer)
        }
    }
    return {cambiarEstadoLibro}
}
export default useBooksEstado;