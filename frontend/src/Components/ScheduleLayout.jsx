import { Outlet } from "react-router-dom"
import ScheduleHeader from "./ScheduleHeader"

export default function ScheduleLayout() {
    return(
        <div>
            <ScheduleHeader />
            <Outlet />
        </div>
    )
}