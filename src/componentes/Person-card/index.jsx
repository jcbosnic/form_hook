import React from "react";

const PersonCard = (props) => (
    <div>
        <div>
            <h1>{props.name}</h1>
            <p>Años : {props.age}</p>
            <p>Color de pelo : {props.hair}</p>
        </div>
    </div>
)

export default PersonCard;