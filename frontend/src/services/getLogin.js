import setting from './settings'
export default function getLogin({user,password}){
    const {urlApi}=setting
    let body={"username":user,password}
    console.log(body)
    return fetch(`${urlApi}/apiUser/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(body)
    })
    .then( res => res.json() )
    .then( response => {
        return response
    })

    /* .then( response => {
        console.log(response)
        const {data,meta}= response
        let newGif=[]
        if(meta && meta.status  && meta.status === 200  && data.length )
            newGif= data.map(item=> {return {"img":item.images.downsized_medium.url, "title":item.title , "id":item.id } })
        return newGif
    }) */

}
