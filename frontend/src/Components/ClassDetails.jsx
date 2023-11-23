import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function ClassDetails() {
    const apiUrl = import.meta.env.VITE_API_URL
    const params = useParams()
    const [lesson, setLesson] = useState(null)
    const classesApi = `${apiUrl}/sports/`

    useEffect((() => {
        fetch(classesApi)
            .then(res => res.json())
            .then(data => setLesson(data.find(item => (item.id === params.id))))
    }), [params.id])
    return (
        <div className="class-details">
            {lesson ? (
                <div className="class-details_page">
                    <img src={lesson.imgUrl} alt="" />
                    <i>{lesson.type}</i>
                    <h1>{lesson.name}</h1>
                    <h2>{lesson.price}KM/month</h2>
                    <p>{lesson.description}</p>
                </div>
            ) : <h1>error</h1>}
        </div>
    )
}