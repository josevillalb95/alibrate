import setting from './settings'
export default function setEstado(user,token){
    const {urlApi}=setting
    return fetch(`${urlApi}/apiUser/modify/${user}`,{
        method:"GET",
        headers:{"Content-Type":"application/json","authorization":token}
    })
    .then( res => res.json() )
    .then( response => {
        return response
    })
}
