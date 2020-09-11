import dotenv from 'dotenv';

import React from "react";
import emailjs from 'emailjs-com';
// import ReCAPTCHA from "react-google-recaptcha";
//
// dotenv.config();
//
// function onChange(value) {
//     console.log('Captcha value:', value)
// }

function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_1jb72nh', e.target, 'user_arXYp4I4EW74lEp92cYT1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            {/*<div>*/}
            {/*<ReCAPTCHA sitekey={process.env.PUBLIC_RECAPTCHA_SITE_KEY} onChange={onChange()} />*/}
            {/*</div>*/}
            <div>
                <label>Name</label>
                <input type="text" name="user_name"/>
                <label>Email</label>
                <input type="email" name="user_email"/>
                <label>Subject</label>
                <input type="subject" name="subject"/>
                <label>Message</label>
                <textarea name="message"/>
                <input type="submit" value="Send"/>
            </div>
        </form>
    );
}

export default Contact;
