import React from 'react'
import main from '../../assets/img/main.jpg'
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
function Home() {
    return (
        <div className='home'>
            <div className="left-icon">
                <div className="icon html animate__animated animate__backInDown">
                    <img src={html} alt="" />
                    <span>HTMl</span>
                </div>
                <div className="icon css animate__animated animate__backInLeft">
                    <img src={css} alt="" />
                    <span>CSS</span>
                </div>
                <div className="icon js animate__animated animate__backInLeft">
                    <img src={js} alt="" />
                    <span>jS</span>
                </div>
                <div className="icon sass animate__animated animate__backInLeft">
                    <img src={sass} alt="" />
                    <span>SASS</span>
                </div>
                <div className="icon bootstrap animate__animated animate__backInUp">
                    <img src={bootstrap} alt="" />
                    <span>Bootstrap</span>
                </div>
            </div>
            <img className='image animate__animated animate__zoomInDown' src={main} alt="" />
            <div className="right-icon">
                <div className="icon react animate__animated animate__backInDown">
                    <img src={react} alt="" />
                    <span>REACT</span>
                </div>
                <div className="icon php animate__animated animate__backInRight">
                    <img src={php} alt="" />
                    <span>PHP</span>
                </div>
                <div className="icon mysql animate__animated animate__backInRight">
                    <img src={mysql} alt="" />
                    <span>MYSQL</span>
                </div>
                <div className="icon laravel animate__animated animate__backInRight">
                    <img src={laravel} alt="" />
                    <span>LARAVEL</span>
                </div>
                <div className="icon redis animate__animated animate__backInUp">
                    <img src={redis} alt="" />
                    <span>REDIS</span>
                </div>
            </div>
        </div>
    )
}

export default Home