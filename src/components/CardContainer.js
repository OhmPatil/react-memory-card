import '../styles/card-container.css'
import Card from './Card'
// import React, {useState} from 'react';

function CardContainer(props){

    console.log('CONTAINER CALLED');

    // const [localAgents, setLocalAgents] = useState([])

    function shuffleContainer(array){
        return [...array].sort(() => Math.random() - 0.5)
    }


    return(
        <div className='card-container'>
            {props.loading && (
                <>LOADING...</>
            )}

            {shuffleContainer(props.agents).map(agent => {
                return (
                    <Card
                    key={agent.uuid}
                    imgSrc={agent.fullPortrait}
                    imgAlt={agent.displayName + 'image'}
                    cardName={agent.displayName}/>
                )
            })}
        </div>
    )
}

export default CardContainer