import React from 'react'
import mail from '../../assets/img/mail.svg'
import { Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

function Contact() {
    return (
        <div id='contact' className='contact'>
            <img className='mail-img' data-aos="flip-right" data-aos-duration="2000" data-aos-easing="linear" src={mail} alt="" />
            <div className="container">
                <h1>Contact Me</h1>
                <form action="https://formspree.io/f/mjvqvjva" method='post'>
                    <div className="full-name" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear">
                        <i class='bx bxs-user' ></i>
                        <input type="text" name='name' placeholder='Full Name' required />
                    </div>
                    <div className="email" data-aos="fade-left" data-aos-duration="1300" data-aos-easing="linear">
                        <i class='bx bxs-envelope' ></i>
                        <input type='email' name='email' placeholder='Eamil' required />
                    </div>
                    <div className="phone" data-aos="fade-left" data-aos-duration="1600" data-aos-easing="linear">
                        <i class='bx bxs-phone' ></i>
                        <input type='number' name='phone' placeholder='Phone Number' required />
                    </div>
                    <textarea placeholder='Message' name='message'  data-aos="fade-left" data-aos-duration="1900" data-aos-easing="linear" cols="40" rows="10"></textarea>
                    <Button variant="contained" data-aos="fade-left" data-aos-duration="2200" data-aos-easing="linear" type='submit' endIcon={<SendIcon />}>
                        Send
                    </Button>
                </form>
                <span className='separator' data-aos="fade-left" data-aos-duration="2500" data-aos-easing="linear"></span>
                <div className="social" data-aos="fade-left" data-aos-duration="2800" data-aos-easing="linear">
                    <a href='https://www.facebook.com/abdo.hamda2017' target='_blank' className="facebook">
                        <i class='bx bxl-facebook'></i>
                        <span>/abdo.hamda2017</span>
                    </a>
                    <a href='https://github.com/Abdallahhamada' target='_blank' className="github">
                        <i class='bx bxl-github'></i>
                        <span>/Abdallahhamada</span>
                    </a>
                    <a href='https://www.linkedin.com/in/' target='_blank' className="linkedin">
                        <i class='bx bxl-linkedin'></i>
                        <span>/abdallah-hamada-89a06b194</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact