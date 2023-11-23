import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Components/Home"
import About from "./Components/About"
import Classes from "./Components/Classes"
import ClassDetails from "./Components/ClassDetails"
import Layout from "./Components/Layout"
import ScheduleLayout from "./Components/ScheduleLayout"
import Schedule from "./Components/Schedule"
import Contact from "./Components/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="classes/:id" element={<ClassDetails />} />
          <Route path="schedule" element={<ScheduleLayout />}>
            <Route path=":day" element={<Schedule />} />
          </Route>
          <Route path="contact" element={ <Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
