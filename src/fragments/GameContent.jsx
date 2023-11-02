import GameGrid from "../components/GameGrid"
import Button from "../components/Button"

const GameContent = ({handler,action_play}) => {
    return (
        <div className="game-content">
            {
            handler.state.numberToFind &&  <h3>Find {handler.state.numberToFind}</h3>
            }
            <GameGrid handler={handler}/>
            <Button name="play_arrow" on_click={action_play}/>
        </div>
    )
}

export default GameContent