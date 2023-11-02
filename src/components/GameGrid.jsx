const GridAdapter = ({numbers}) => {
    return (
        <div className="game-grid">
            {
                numbers.map(number=>{
                    return <div className="number-box" key={number}>{number}</div>
                })
            }
        </div> 
    )
}

const GameGrid = ({handler}) => {
    console.log('Got numbers to display',handler.state)
    return <GridAdapter numbers={handler.state.randomNumbers}/>
}

export default GameGrid