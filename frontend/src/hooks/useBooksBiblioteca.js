import {useContext,useEffect,useState} from 'react'
import  SessionContext  from '../context/SessionContext'
export default function useBooksBiblioteca(){
    const {userLogin}=useContext(SessionContext);
    const [categoria,setCategoria]=useState("leido")
    const [libros,setLibros]=useState([])
    useEffect(() => {
        if(categoria && userLogin[categoria] && userLogin[categoria].length ){
            let mapBook=userLogin[categoria].map( (libro)=>{
                return {
                    "_id":libro._id,
                    "categoria":libro.category?libro.category[0]:"",
                    "autor":libro.author,
                    "titulo":libro.title,
                    "img":libro.bookCover,
                    "calificacion":libro.globalRating?libro.globalRating.rating:0
                }
            })
            setLibros(mapBook)
        }
        else
            setLibros([])
    }, [categoria,userLogin])
    return {
        libros,
        categoria,
        setCategoria //mal
    }

}
