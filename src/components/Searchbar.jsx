import { useEffect } from "react"

export default function Searchbar({filter, onSubmit}){
    useEffect(() => {

    })

    return(
        <>
            <input value={filter} placeholder=""/>
            <button onSubmit={onSubmit}>search</button>
        </>
    )
}