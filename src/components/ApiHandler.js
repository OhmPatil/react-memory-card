import React, {useState, useEffect} from "react";
import CardContainer from "./CardContainer";

function ApiHandler() {
    const [agents, setAgents] = useState([])

    const getAgents = async() => {
        let agents = []

        const url = 'https://valorant-api.com/v1/agents'
        try {
            console.log('Fetching from API...');
            const response = await fetch(url, {mode: 'cors'})
            const responseData = await response.json()
            agents = responseData.data
            console.log('AGENTS: ', agents);
        }
        catch(err){
            console.log('ERROR');
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

    return(
        <>
            <CardContainer agents={agents}/>
        </>
    )
       
}

export default ApiHandler;