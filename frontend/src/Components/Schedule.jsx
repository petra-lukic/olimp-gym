import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function Schedule() {
    const apiUrl = import.meta.env.VITE_API_URL
    const params = useParams()
    const [schedule, setSchedule] = useState([])

    const scheduleApi = `${apiUrl}/schedule/?sort_by=time`

    useEffect((() => {
        fetch(scheduleApi)
            .then(res => res.json())
            .then(data => setSchedule(data.filter(item =>(item.day.toLowerCase() === params.day))))
    }), [params.day])

    const dayEl = schedule && schedule.map(item => (
        <div className="schedule_table_row" key={item.id}>
            <div className="schedule_table_row_container">
                <h2>class name</h2>
                <h1>{item.sport.name}</h1>
            </div>
            <div className="schedule_table_row_container">
                <h2>time</h2>
                <h1>{item.time}</h1>
            </div>
            <div className="schedule_table_row_container">
                <h2>trainer</h2>
                <h1>{item.sport.trainer}</h1>
            </div>
            <Link to="/contact" className="schedule_table_row_join-now">join now</Link>
        </div>
    ))

    return(
        <div className="schedule">
            {dayEl}
        </div>
    )
}