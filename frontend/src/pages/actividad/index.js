
import React,{useCallback,useRef,useEffect} from 'react'
import Libro from '../../component/libro'
import useBooks from '../../hooks/useBooks'
import useSession from '../../hooks/useSession'
import useScreen from '../../hooks/useScreen'
import debounce from "just-debounce-it";
export default function Index() {
    const {jwt}=useSession()
    const externalRef=useRef()
    const {isShow}=useScreen({externalRef , oneUse:false})
    const {libros , setSkip }=useBooks(jwt)
    const debounceCallback= useCallback(debounce(
        () =>  setSkip( oldSkip => oldSkip+1 ), 1000
    ),[])

    useEffect(() => {
        if(isShow)debounceCallback()
    }, [isShow])

    return (
        <div>
            <div className="listBooks">
            {
                libros.map((libro)=>   <Libro key={libro._id} libro={libro} /> )
            }
            </div>
            <span ref={externalRef} />
        </div>
    )
}
