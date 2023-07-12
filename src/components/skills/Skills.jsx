import React from 'react'
import html from '../../assets/img/html.png'
import css from '../../assets/img/css.png'
import js from '../../assets/img/js.png'
import sass from '../../assets/img/sass.png'
import bootstrap from '../../assets/img/bootstrap.png'
import react from '../../assets/img/react.png'
import php from '../../assets/img/php.png'
import mysql from '../../assets/img/mysql.png'
import laravel from '../../assets/img/laravel.png'
import redis from '../../assets/img/redis.png'

function Skills() {
    return (
        <div id='skills' className='skills'>
            <div className="icon html" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="linear">
                <img src={html} alt="" />
                <span>HTMl</span>
            </div>
            <div className="icon css" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="linear">
                <img src={css} alt="" />
                <span>CSS</span>
            </div>
            <div className="icon js" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="linear">
                <img src={js} alt="" />
                <span>jS</span>
            </div>
            <div className="icon sass" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="linear">
                <img src={sass} alt="" />
                <span>SASS</span>
            </div>
            <div className="icon bootstrap" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="linear">
                <img src={bootstrap} alt="" />
                <span>Bootstrap</span>
            </div>
            <div className="icon react" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="linear">
                <img src={react} alt="" />
                <span>REACT</span>
            </div>
            <div className="icon php" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="linear">
                <img src={php} alt="" />
                <span>PHP</span>
            </div>
            <div className="icon mysql" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="linear">
                <img src={mysql} alt="" />
                <span>MYSQL</span>
            </div>
            <div className="icon laravel" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="linear">
                <img src={laravel} alt="" />
                <span>LARAVEL</span>
            </div>
            <div className="icon redis" data-aos="flip-right" data-aos-duration="1500" data-aos-easing="linear">
                <img src={redis} alt="" />
                <span>REDIS</span>
            </div>
        </div>
    )
}

export default Skills