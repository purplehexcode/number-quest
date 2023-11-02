import TimeHistory from "../components/TimeHistory"
import Timer from "../components/Timer"

const TimeDetails = ({state}) => {
    return (
        <div className="time-details">
            <Timer state={state}/>
            <TimeHistory state={state}/>
        </div>
    )
}

export default TimeDetails