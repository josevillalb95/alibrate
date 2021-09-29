import {useEffect,useState,useRef} from 'react'
export default function useScreen({externalRef=null,oneUse=true}) {
    const refItem=useRef()
    const [isShow,setShow]=useState(false)
    useEffect(() => {
        let refCurrent=externalRef?externalRef.current:refItem.current
        if(!refCurrent){
            return null 
        } 
        const onChante=(entris,observer)=>{
            let intersection=entris[0].isIntersecting
            if(intersection){
                if(oneUse) 
                    observer.disconnect()
                setShow(true)
            }else{
                if(!oneUse) 
                    setShow(false)
            }
        }
        const observer=new IntersectionObserver(onChante,{
            rootMargin:"100px",
        })
        observer.observe(refCurrent)
        return ()=>observer.disconnect()
       
    })
    return {isShow,refItem}
}
