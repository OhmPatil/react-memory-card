import '../styles/scoreboard.css'

function ScoreBoard(props){
    return(
        <div id="scoreboard">
            <div id='current'>Current Score: {props.current}</div>
            <div id='high'>High Score: {props.high}</div>
        </div>
    )
}


export default ScoreBoard