import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Classes() {
    const apiUrl = import.meta.env.VITE_API_URL
    const [classes, setClasses] = useState([])
    const classesApi = `${apiUrl}/sports/`
    useEffect(() => {
        fetch(classesApi)
        .then(res => res.json())
        .then(data => setClasses(data))
    }, [])

    const classEl = classes.map(lesson => (
        <Link to={`/classes/${lesson.id}`} target="_blank">
            <div className="class-card" 
                key={lesson.id}
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${lesson.imgUrl})`,
                    backgroundSize: 'cover',}}>
                <h3>{lesson.name}</h3>
            </div>
        </Link>
    ))
    return (
        <div className="classes">
            {classEl}
        </div>
    )
}