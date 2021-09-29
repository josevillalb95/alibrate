import React from 'react'
import {  Route } from "wouter";
import Actividad from './actividad'
import MiBiblioteca from './miBiblioteca'
import Ranking from './rankings'
import Ebooks from './ebooks'
import Textos from './textos'
import BottomNav from '../component/bottomNav'
import TopNav from '../component/topNav'
import BusquedaAvanzada from './busquedaAvanzada'
import Registro from './registro/index'
import Login from './login'
import useSession from '../hooks/useSession'

export default function Index() {
    const {isLogin}=useSession()
    return (
        <div>
        {isLogin?
        <>
            <TopNav/>
            <Route path="/" component={Actividad} />
            <Route path="/biblioteca" component={MiBiblioteca} />
            <Route path="/ranking" component={Ranking} />
            <Route path="/ebooks" component={Ebooks} />
            <Route path="/textos" component={Textos} />
            <Route path="/busquedaAvanzada" component={BusquedaAvanzada} />
            <BottomNav/>    
        </>
        :  
        <>
            <Route path="/" component={Login} />
            <Route path="/registro" component={Registro} />
        </>
        }    
        </div>
    )
}
