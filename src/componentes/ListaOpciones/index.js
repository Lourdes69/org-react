
import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "Ux y Diseño",
        "Movil",
        "Innovacion y Gestion"
    ]

const manejarCambio = (e) => {
    props.actualizarEquipo(e.target.value)
}

    return <div className="Lista-opciones">
    <label> Equipos </label>
    <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
    { equipos.map( (equipo, index) => <option key={index}>  {equipo}</option>)}
    </select>
    </div>
}
export default ListaOpciones

