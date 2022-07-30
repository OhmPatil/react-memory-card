import '../styles/card-container.css'
import Card from './Card'

function CardContainer(props){

    console.log('CONTAINER CALLED');

    return(
        <div className='card-container'>
            {props.agents.map(agent => {
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