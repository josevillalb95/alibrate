import React,{useContext} from 'react'
import  SessionContext  from '../../context/SessionContext'
import BibliotecaHeader from '../../component/bibliotecaHeader'
import SinLibro from '../../component/sinLibro';
import useBooksBiblioteca from '../../hooks/useBooksBiblioteca';
import Libro from '../../component/libro'
export default function Index() {
    const {userLogin }=useContext(SessionContext);
    const {libros,setCategoria,categoria} = useBooksBiblioteca()

    return (
        <div>
            <BibliotecaHeader  usuario={userLogin} />
            <div className="categoriasLibros">

            
                <span className={`min dark-grey  ${categoria === "leido"? 'active': ''}`} onClick={ ()=>setCategoria("leido")} >Leídos ({userLogin.leido?userLogin.leido.length:0})</span>
                <span className={`min dark-grey  ${categoria === "leyendo"? 'active': ''}`} onClick={ ()=>setCategoria("leyendo")} >Leyendo ({userLogin.leyendo?userLogin.leyendo.length:0}) </span>
                <span className={`min dark-grey  ${categoria === "porhacer"? 'active': ''}`} onClick={ ()=>setCategoria("porhacer")} >Por leer ({userLogin.porhacer?userLogin.porhacer.length:0})</span>
                <span className={`min dark-grey  ${categoria === "abandonado"? 'active': ''}`} onClick={ ()=>setCategoria("abandonado")} >Abandonados ({userLogin.abandonado?userLogin.abandonado.length:0})</span>
            </div>
            { !libros.length? 
                <SinLibro/>
            :    
                <div className="listBooks">{
                    libros.map((libro)=>   <Libro key={libro._id} libro={libro} /> )
                }</div>
            
            }
        </div>
    )
}
