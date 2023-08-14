// import { useState } from "react" 
import "./MiOrg.css"

    //Estado - hooks
    //useState
    //const [nombreVariable, funcionActualizada ] = usesState(valorInicial)


const MiOrg = (props) => {
    console.log(props)

// const [mostrar, actualizarNombre] = useState(true)
// const manejarClick = () => {
//     console.log("Mostrar/Ocultar elemnto", !mostrar)
//  actualizarMostrar(!mostrar)
//      }

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg