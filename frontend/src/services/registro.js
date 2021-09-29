import setting from './settings'
export default function registro({user,nombre,apellido,password}){
    const {urlApi}=setting
    let body={
        "username":user,
        "password":password,
        "name":nombre,
        "lastname":apellido
    }
    return fetch(`${urlApi}/apiUser/register`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
    })
    .then( res => res.json() )
    .then( response => {
        return response
    })



}
