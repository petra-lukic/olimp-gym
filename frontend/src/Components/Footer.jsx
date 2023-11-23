export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img src="https://i.imgur.com/Krwaoex.png" alt="" />
                <p>
                    Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                </p>
                <div className="footer_left_contact-us">
                    <div className="footer_left_contact-us_container">
                        <img src="https://i.imgur.com/PF5ZUNF.png" alt="" />
                        <p>Tiršova 9, Bijeljina 76300, B&H</p>
                    </div>
                    <div className="footer_left_contact-us_container">
                        <img src="https://i.imgur.com/qbgwTJx.png" alt="" />
                        <p>+387 66 005 989</p>
                    </div>
                    <div className="footer_left_contact-us_container">
                        <img src="https://i.imgur.com/jisuNp4.png" alt="" />
                        <p>olimpgym@gmail.com</p>
                    </div>
                </div>
                <p>© 2023 Olimp Gym. All rights reserved.</p>
            </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2833.0108229884663!2d19.214855!3d44.760194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475be91e0af7618b%3A0xf509c7f6aee63109!2sMajevi%C4%8Dka%2C%20Bijeljina%2076300%2C%20Bosnia%20and%20Herzegovina!5e0!3m2!1sen!2sch!4v1694100080825!5m2!1sen!2sch"
                    className="map"
                    allowFullScreen=""
                    loading="lazy"
                    samesite="Strict"
                    title="map"
                ></iframe>

            <div className="footer_right">
                <h1>working hours</h1>
                <h2>monday - friday</h2>
                <p>05:00 - 23:00</p>
                <h2>saturday</h2>
                <p>06:00 - 00:00</p>
                <h2>Sunday</h2>
                <p>08:00 - 22:00</p>
            </div>
        </div>
    )
}