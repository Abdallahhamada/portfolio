import React from 'react';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {TiGroupOutline} from 'react-icons/ti'
import {BiMessageRoundedDots} from 'react-icons/bi'
import {BsArrowDownCircle} from 'react-icons/bs'
import Tooltip from '@mui/material/Tooltip'

const activate= (e)=>{
    const list = document.querySelectorAll('i');
    list.forEach((item)=>{
        item.classList.remove('active');
    })
    console.log(e.target.className);
    e.target.className +=' active';
}
function Nav() {
    return (
        <nav>
            <ul>
                <li onClick={activate}><a href="#home"><Tooltip title="Home"><i className='bx bx-home'></i></Tooltip></a></li>
                <li onClick={activate}><a href="#about"><Tooltip title="About"><i  className='bx bx-user' ></i></Tooltip></a></li>
                <li onClick={activate}><a href="#contact"><Tooltip title="Contact"><i  className='bx bx-message-rounded-dots'></i></Tooltip></a></li>
                <li onClick={activate}><a href="#skills"><Tooltip title="Skills"><i  className='bx bx-command' ></i></Tooltip></a></li>
                {/* <li onClick={activate}><a href="#footer"><Tooltip title="Footer"><i  className='bx bx-down-arrow-circle' ></i></Tooltip></a></li> */}
            </ul>
        </nav>
    )
}

export default Nav