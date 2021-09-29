import setting from './settings'
export default function setEstado(libro,user,estado,token){
    const {urlApi}=setting
    return fetch(`${urlApi}/apiUser/modify`,{
        method:"POST",
        headers:{"Content-Type":"application/json","authorization":token},
        body:JSON.stringify({libro,user,estado})
    })
    .then( res => res.json() )
    .then( response => {
        return response
    })
}
