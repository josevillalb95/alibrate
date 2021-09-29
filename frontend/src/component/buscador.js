import React from 'react'
import { Link } from 'wouter';

export default function buscador() {
    return (
        <div className="buscador">
            <form ><input placeholder="Buscar lectores y libros (título o autor)" ></input>
            </form>
            <Link  to="/busquedaAvanzada" ><span>Búsqueda avanzada </span></Link>
        </div>
    )
}
