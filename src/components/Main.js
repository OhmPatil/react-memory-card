import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Loader from "./Loader";
import ScoreBoard from "./ScoreBoard";

function Main() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

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
      resetGame()
    } else{
      setClickedCards((prevCards) => [...prevCards, agentName]);
      setCurrentScore(prevScore => prevScore+1)
      checkWin(currentScore)
      const newScore = currentScore+1
      if (newScore > highScore) setHighScore(newScore)
    }
  }

  function resetGame(){
    setClickedCards([])
    setCurrentScore(0)
  }

  function checkWin(score){
    if (score === 11) alert('You Win!');
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
        <ScoreBoard current={currentScore} high={highScore}/>
        <CardContainer agents={agents} handleClick={handleClick} />
        </>
      )}
    </>
  );
}

export default Main;
