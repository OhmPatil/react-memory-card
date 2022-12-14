import "../styles/card-container.css";
import Card from "./Card";

function CardContainer(props) {
  function shuffleContainer(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  return (
    <div className="card-container">
      {shuffleContainer(props.agents).map((agent) => {
        return (
          <Card
            key={agent.uuid}
            imgSrc={agent.fullPortrait}
            imgAlt={agent.displayName + "image"}
            cardName={agent.displayName}
            handleClick={props.handleClick}
          />
        );
      })}
    </div>
  );
}

export default CardContainer;
