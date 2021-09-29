import React from 'react'
import Start from './star'
import {GrMoreVertical} from  'react-icons/gr';
import SelectEstado from './selectEstado';
export default function Libro( {libro} ) {
    const  {categoria,autor,titulo,img,calificacion,_id} = libro
    return (
        <div className="libroItem" data-id={_id}>
            <img src={img} alt={titulo} />
            <div className="descripcion">
                <GrMoreVertical/>
                <span className="min" >{categoria}</span>
                <span  className="titulo">{titulo}</span>
                <span  className="min dark-grey" >{autor}</span>
                <Start/>
                <span  className="min">Calificación general: <b className="clasificacion-blue"  >{calificacion}</b></span>
                <SelectEstado _id={_id} />
            </div>
        </div>
    )
}
