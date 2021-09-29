import React, {useState} from 'react'
import { BsBell} from 'react-icons/bs';
import {  FiMenu} from 'react-icons/fi';
import Buscador from './buscador'
import Menu from './menu'
export default function TopNav() {
    const [menu,setMenu]=useState(false)
    const changeMenu=(event)=>{
        setMenu(true)
    }
    return (
        <div className="topNav">
            { menu ? <Menu setMenu={setMenu} /> : null }
            <FiMenu  onClick={changeMenu} />
            <Buscador/>
            <BsBell/>
        </div>
    )
}
