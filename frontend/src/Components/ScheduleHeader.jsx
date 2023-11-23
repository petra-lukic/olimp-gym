import { NavLink } from "react-router-dom"

export default function ScheduleHeader() {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="schedule-header">
            {daysOfWeek.map(day => (
                <NavLink to={`/schedule/${day.toLowerCase()}`} className={({isActive}) => isActive ? "schedule-header_link schedule-header_active" : "schedule-header_link"}>
                    {day}
                </NavLink>
            ))}
        </div>
    )
}