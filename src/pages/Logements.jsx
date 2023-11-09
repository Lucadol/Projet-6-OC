import { useParams } from "react-router-dom"

export function Logements () {

    const {id} = useParams()
    
    return <div>
        <h1>Fiche logement {id} </h1>
    </div>
}