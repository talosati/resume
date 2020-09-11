import dotenv from 'dotenv';

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap'
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
        emailjs.sendForm('gmail', 'template_lq7wgyd', e.target, 'user_arXYp4I4EW74lEp92cYT1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className='w-50 mx-auto p-3 mt-2'>
            <form className="contact-form" onSubmit={sendEmail}>
                {/*<div>*/}
                {/*<ReCAPTCHA sitekey={process.env.PUBLIC_RECAPTCHA_SITE_KEY} onChange={onChange()} />*/}
                {/*</div>*/}
                <Form>
                    <Form.Group controlId="formGroupUsername">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="user_name"/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='user_email'/>
                    </Form.Group>
                    <Form.Group controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="subject" name='subject'/>
                    </Form.Group>
                    <Form.Group controlId="textarea">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="10" name='message'/>
                    </Form.Group>
                    <Button variant="dark" type='submit' value='Send'>Send</Button>
                </Form>
            </form>
        </div>
    );
}

export default Contact;
