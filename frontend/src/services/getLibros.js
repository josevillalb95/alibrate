import setting from './settings'
export default function GetLibros(val){

    const {jwt,skip}=val
    const {urlApi}=setting
    let limit=10
    return fetch(`${urlApi}/apiBook?skip=${limit*skip}&limit=${limit}`,{
        method:"GET",
        headers:{"Content-Type":"application/json","authorization":jwt}
    })
    .then( res => res.json() )
    .then( response => {
        return response
    })


}
