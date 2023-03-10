import React from "react"

let BASEURL = 'https://raw.githubusercontent.com/' + 'PokeAPI/sprites/master/sprites/pokemon/'

function Pokecard(props){
    let imgSrc = `${BASEURL}${props.id}.png`

    return(
        <div>
            <h3>{props.name}</h3>
            <img src={`${imgSrc}`}/>
            <p>Type: {props.type}</p>
            <p>EXP: {props.exp}</p>
        </div>
    )
}

export default Pokecard