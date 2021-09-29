import React from 'react'

export default function cardUser({usuario}) {
    return (
        <div className="itemCardUser">
            <img src={usuario.img} />
            <span>{usuario.name} {usuario.lastname}</span>
            
        </div>
    )
}
