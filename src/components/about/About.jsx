import React from 'react'
import main from '../../assets/img/main.jpg'

function About() {
    return (
        <div id='about' className='about'>
            <div className="left-container">
                <h1 data-aos="fade-right" >About <span>Me</span></h1>
                <p data-aos="fade-right" data-aos-delay="100">Full Stack Developer</p>
                <span className='text' data-aos="fade-right" data-aos-delay="150">
                    I am a skilled web designer with over 3 years of experience in the industry. My passion lies in
                    creating captivating website designs and implementing them through frontend development. I
                    take pride in staying up-to-date with current design trends and leveraging my creativity to
                    produce visually appealing and user-friendly websites. Throughout my career, I have
                    developed a deep understanding of user experience (UX) and user interface (UI) principles.
                    By putting myself in the shoes of the end-users, I strive to create intuitive and seamless
                    browsing experiences. I believe that a well-designed website should not only look visually
                    appealing but also provide a smooth and enjoyable interaction for visitors. When starting a
                    new project, I thoroughly research and analyze the target audience and the client's specific
                    requirements. This enables me to tailor my designs to meet their expectations and deliver a
                    unique online presence that aligns with their brand identity..
                </span>
            </div>
            <img data-aos="zoom-in-left" data-aos-duration="2000" data-aos-easing="linear" src={main} alt="main" />
        </div>
    )
}

export default About