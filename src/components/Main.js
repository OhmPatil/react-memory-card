import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Loader from "./Loader";
import ScoreBoard from "./ScoreBoard";

function Main() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);

  const getAgents = async () => {
    let agents = [];

    const url = "https://valorant-api.com/v1/agents";
    try {
      setLoading(true);
      console.log("Fetching from API...");
      const response = await fetch(url, { mode: "cors" });
      const responseData = await response.json();
      agents = responseData.data;
      console.log("AGENTS while fetching: ", agents);
    } catch (err) {
      console.log("ERROR");
      console.log(err);
    }

    return agents;
  };

  useEffect(() => {
    const loadCards = async () => {
      const allAgents = await getAgents();
      let reqAgents = [];
      console.log("ALL AGENTS: ", allAgents);

      for (let i = 0; i <= 12; i++) {
        if (allAgents[i].isPlayableCharacter) {
          reqAgents.push(allAgents[i]);
        }
      }

      console.log("REQUIRED AGENTS: ", reqAgents);
      setAgents(reqAgents);
      setLoading(false);
    };

    loadCards();
  }, []);

  function handleClick(e) {
    const agentName = e.target.lastChild.textContent;
    playGame(agentName);
  }

  function playGame(agentName) {
    if (clickedCards.includes(agentName)) {
      console.log("YOU LOST");
    } else {
      setClickedCards((prevCards) => [...prevCards, agentName]);
      console.log(clickedCards);
    }
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
        <ScoreBoard current={12} high={12}/>
        <CardContainer agents={agents} handleClick={handleClick} />
        </>
      )}
    </>
  );
}

export default Main;
