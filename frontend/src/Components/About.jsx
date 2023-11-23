import OurFriends from "./OurFriends"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about">
            <div className="about_container">
                <div className="about_container_text">
                    <h1>Your Journey to a Healthier You Begins Here!</h1>
                    <p>
                    Welcome to <span>Olimp</span>, where fitness meets passion! We are more than just a gym; we're a community dedicated to helping you achieve your health and fitness goals.
                    </p>
                    <Link to="/contact" className="about_container_text_button">contact us</Link>
                </div>
                <img src="https://i.imgur.com/u1RhfR0.png" alt=""/>
            </div>

            <OurFriends />

            <div className="about_why-choose-us">
                <h1>Why choose us?</h1>
                <div className="about_why-choose-us_cards">
                    <div className="about_why-choose-us_cards_card">
                        <img src="https://i.imgur.com/2IhxmzU.png" alt=""/>
                        <h2>Modern equipment</h2>
                        <p>
                            Our gym is equipped with top of the range equipment and modern amenities to enhance your workout experience.
                        </p>
                    </div>
                    <div className="about_why-choose-us_cards_card">
                        <img src="https://i.imgur.com/FaL7i1L.png" alt=""/>
                        <h2>Expert trainers</h2>
                        <p>
                            Our certified trainers are here to provide guidance, support, and personalized fitness plans.
                        </p>
                    </div>
                    <div className="about_why-choose-us_cards_card">
                        <img src="https://i.imgur.com/mRDROvw.png" alt=""/>
                        <h2>Diverse classes</h2>
                        <p>
                            From yoga and HIIT to strength training and cardio, we offer a variety of classes to keep your fitness routine fresh.
                        </p>
                    </div>
                    <div className="about_why-choose-us_cards_card">
                        <img src="https://i.imgur.com/mTRtA6Y.png" alt=""/>
                        <h2>Community driven</h2>
                        <p>
                            Join a welcoming community of fitness enthusiasts who share your goals and motivation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about_container">
                <img src="https://i.imgur.com/V5kCwW1.png" alt="" />
                <div className="about_container_text">
                    <h1>Transform Your Body, Transform Your Life</h1>
                    <p>
                        Experience the power of our expertly crafted fitness classes. Whether you're a beginner or a seasoned athlete, we have something for everyone. Get started on your fitness journey today and discover a healthier, happier you.
                    </p>
                    <Link to="/classes" className="about_container_text_button">our classes &#8594;</Link>
                </div>
            </div>

            <div className="about_big-headline">
                <p>Unlock Your Potential, Embrace Your Transformation.</p>
            </div>
        </div>
    )
}