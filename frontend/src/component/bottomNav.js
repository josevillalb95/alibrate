import React from 'react'
import Icono from './icono'


import { FaAward } from 'react-icons/fa';
import { VscLibrary } from 'react-icons/vsc';
import { AiOutlineLayout } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FiFeather } from 'react-icons/fi';

export default function bottomNav() {
    let nav=[
        {
            "link":"/",
            "icono":AiOutlineLayout,
            "text":"Actividad",
            "id":123
        },
        {
            "link":"/biblioteca",
            "icono":VscLibrary,
            "text":"Mi biblioteca",
            "id":21

        },
        {
            "link":"/ranking",
            "icono":FaAward,
            "text":"Rankings",
            "id":34

        },
        {
            "link":"/textos",
            "icono":FiFeather,
            "text":"Textos",
            "id":423

        },
        {
            "link":"/ebooks",
            "icono":BsSearch,
            "text":"Explorar",
            "id":5443

        }
    ]
    return (
        <div className="bottomNav">
        {
            nav.map(icono=>
                <Icono key={icono.id}  icono={icono} />
            )
        }
        </div>
    )
}
