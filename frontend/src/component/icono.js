import React from 'react'

import { Link } from 'wouter';

export default function icono({icono}) {
    let ComponentName=icono.icono;
    return (
        <Link to={icono.link}  > { React.createElement(ComponentName) }<span>{icono.text}</span></Link>
    )
}
