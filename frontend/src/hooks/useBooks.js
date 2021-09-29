import {useEffect,useState} from 'react'
import GetLibros from '../services/getLibros';
export default function UseBooks(jwt) {
    const [libros,setLibros]=useState([])
    const [skip,setSkip]=useState(0)
    useEffect( ()=>{
        GetLibros({jwt,skip}).then(jsonResponse=>{
            if(jsonResponse["data"] && jsonResponse["data"].length){
                let mapBook=jsonResponse["data"].map( (libro)=>{
                    return {
                        "_id":libro._id,
                        "categoria":libro.category?libro.category[0]:"",
                        "autor":libro.author,
                        "titulo":libro.title,
                        "img":libro.bookCover,
                        "calificacion":libro.globalRating?libro.globalRating.rating:0
                    }
                })
                setLibros((oldLibros)=> oldLibros.concat(mapBook) ) 
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },[skip,setLibros])
    return {
        libros,
        setSkip // mal
    }
}
