import TimeHistory from "../components/TimeHistory"
import Timer from "../components/Timer"

const TimeDetails = () => {
    return (
        <div className="time-details">
            <Timer/>
            <TimeHistory/>
        </div>
    )
}

export default TimeDetails