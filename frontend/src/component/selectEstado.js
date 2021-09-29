import useBooksEstado from "../hooks/useBookEstado"
export default function SelectEstado({_id}) {
    const {cambiarEstadoLibro}=useBooksEstado();
    function gerEstado(e){ 
        if(!e.target.value)
            return 
        cambiarEstadoLibro(e.target.value.split("-"))
    }
    return (
        <select className="selectEstado" onChange={gerEstado} >
            <option value=""></option>
            <option value={_id+"-porhacer"} >Por leer</option>
            <option value={_id+"-leyendo"}>Leyendo</option>
            <option value={_id+"-leido"} >Leído</option>
            <option value={_id+"-abandonado"} >Abandonado</option>
        </select>
    )
}

