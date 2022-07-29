import '../styles/card-container.css'
import Card from './Card'
import React, {useState, useEffect} from 'react'

function CardContainer(){

    console.log('CONTAINER CALLED');

    const [images, setImages] = useState([])
    const [names, setNames] = useState([])
    const [agents, setAgents] = useState([])

    const getAgents = async() => {
        let agents = []

        const url = 'https://valorant-api.com/v1/agents'
        try {
            const response = await fetch(url)
            const responseData = await response.json()
            agents = responseData.data
        }
        catch(err){
            console.log(err);
        }

        return agents
    }

    useEffect(() => {
        const loadCards = async() => {
            setAgents(await getAgents())
        }

        loadCards()
    }, [])
       

    // console.log(agents[0]);


    return(
        <div className='card-container'>
            <Card imgSrc={agents[0].fullPortrait}
            imgAlt={'character'}
            cardName={'Fade'}/>
        </div>
    )
}

export default CardContainer