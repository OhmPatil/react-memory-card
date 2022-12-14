import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Loader from "./Loader";
import ScoreBoard from "./ScoreBoard";

function Main() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const getAgents = async () => {
    let agents = [];

    const url = "https://valorant-api.com/v1/agents";
    try {
      setLoading(true);
      const response = await fetch(url, { mode: "cors" });
      const responseData = await response.json();
      agents = responseData.data;
    } catch (err) {}

    return agents;
  };

  useEffect(() => {
    const loadCards = async () => {
      const allAgents = await getAgents();
      let reqAgents = [];

      for (let i = 0; i <= 12; i++) {
        if (allAgents[i].isPlayableCharacter) {
          reqAgents.push(allAgents[i]);
        }
      }

      setAgents(reqAgents);
      setLoading(false);
    };

    loadCards();
  }, []);

  // useEffect(() => {
  //   alert('Only one rule: Dont click on the same card twice!')
  // }, [])

  function handleClick(e) {
    const agentName = e.target.lastChild.textContent;
    playGame(agentName);
  }

  function playGame(agentName) {
    if (clickedCards.includes(agentName)) {
      resetGame();
    } else {
      setClickedCards((prevCards) => [...prevCards, agentName]);
      setCurrentScore((prevScore) => prevScore + 1);
      checkWin(currentScore);
      const newScore = currentScore + 1;
      if (newScore > highScore) setHighScore(newScore);
    }
  }

  function resetGame() {
    setClickedCards([]);
    setCurrentScore(0);
  }

  function checkWin(score) {
    if (score === 11) alert("Congrats! You Won.");
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <ScoreBoard current={currentScore} high={highScore} />
          <CardContainer agents={agents} handleClick={handleClick} />
        </>
      )}
    </>
  );
}

export default Main;
