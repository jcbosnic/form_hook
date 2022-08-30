import React, {useState} from "react";

const PersonCard = ({name, age, hair }) => {

    const [edad, setEdad] = useState(age)

    return (
    <div>
        <div>
            <h1>{name}</h1>
            <p>Años : {edad}</p>
            <p>Color de pelo : {hair}</p>
            <button onClick={() => setEdad(edad + 1)}>Incrementar edad {name}</button>
        </div>
    </div>
    )
}

export default PersonCard;