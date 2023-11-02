const Timer = ({state}) => {
    return (
        <div className="timer">
            <p>Timer</p>
            <h1 className="timer-numbers">{state.timer}</h1>
        </div>
    ) 
}

export default Timer