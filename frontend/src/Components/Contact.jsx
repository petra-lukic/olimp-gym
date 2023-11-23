export default function Contact() {
    return (
        <div className="contact">
            <div className="contact_text">
                <h1>Let's Stay Connected</h1>
                <p>
                Have questions or need assistance? We're here to help! Feel free to contact us using the contact form on the right, using the contact information below or visit us during working hours.
                </p>
            </div>
            <form className="contact_form" method="POST" target="blank" action="https://formspree.io/f/mbjeekqq" id="">
                <div className="contact_form_personal-info" data-id="full-name">
                    <label for="full-name">Your Name<span>*</span></label>
                    <input id="full-name" placeholder="Enter your name" type="text" name="name" required="required"/>
                </div>
                <div className="contact_form_personal-info" data-id="email">
                    <label for="email">Your Email Adress<span>*</span></label>
                    <input id="full-name" placeholder="Enter your email address" type="email" name="_replyto" required="required"/>
                </div>
                <div className="contact_form_message" data-id="message">
                    <label>Your Message<span>*</span></label>
                    <textarea placeholder="Enter your message" id="message" name="message" required="required" rows="7" minlength="30" />
                </div>
                <button type="submit" id="submit-button" className="contact_form_button">Send</button>
            </form>
        </div>
    )
}