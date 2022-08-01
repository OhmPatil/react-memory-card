import '../styles/card.css'

function Card(props){

    return(
        <div className='card' onClick={props.handleClick}>
            <img className='card-img' src={props.imgSrc} alt={props.imgAlt}></img>
            <p className='card-name'>{props.cardName}</p>
        </div>
    )
}

export default Card