import '../styles/card.css'
import React, {useState} from 'react'

function Card(props){

    const [clicked, setClicked] = useState(false)

    function handleClick(e){
        setClicked(true)
    }

    return(
        <div className='card' onClick={(e) => handleClick(e)}>
            <img className='card-img' src={props.imgSrc} alt={props.imgAlt}></img>
            <p className='card-name'>{props.cardName}</p>

            {clicked && (
                <p>Yes</p>
            )}

            {!clicked && (
                <p>No</p>
            )}
        </div>
    )
}

export default Card