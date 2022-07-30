import React, { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import Loader from "./Loader";

function ApiHandler() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(false)

  const getAgents = async () => {
    let agents = [];

    const url = "https://valorant-api.com/v1/agents";
    try {
      setLoading(true)
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
      setLoading(false)
    };

    loadCards();
  }, []);

  return (
    <>
       {loading && (<Loader/>)}
       {!loading && (<CardContainer agents={agents}/>)}
    </>
  );
}

export default ApiHandler;
