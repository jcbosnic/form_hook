import React, {useState} from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        contraseña: '',
        repetirContraseña: ''


    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <div>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="col-md-3">
                    <input type="email" placeholder="Correo" className="form-control" onChange={handleInputChange} name="correo"></input>
                </div>
                <div className="col-md-3">
                    <input type="password" placeholder="Contraseña" className="form-control" onChange={handleInputChange} name="contraseña"></input>
                </div>
                <div className="col-md-3">
                    <input type="password" placeholder="Repetir Contraseña" className="form-control" onChange={handleInputChange} name="repetirContraseña"></input>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
                <li>{datos.correo}</li>
                <li>{datos.contraseña}</li>
                <li>{datos.repetirContraseña}</li>
            </ul>
        </div>
    );
}
 
export default Formulario;