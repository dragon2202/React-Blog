import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Avatar } from 'antd'

const navLinks = [
    {
        title:'Home',
        path: '/'
    },
    {
        title:'Page1',
        path: '/Page1'
    },
    {
        title:'Page2',
        path: '/Page2'
    },
    {
        title:'Page3',
        path: '/Page3'
    },
    {
        title:'Page4',
        path: '/Page4'
    },
    {
        title:'Login',
        path: '/login'
    },
    {
        title: 'Post Viewer',
        path: '/post'
    }
]

export default function Navigation ({user}) {
    const [menuActive, setMenuActive] = useState(false)

    return(
    <nav className="site-navigation">
        <span className="menu-title">Calvin's React Blog</span>
        <div className={`menu-content-container ${menuActive && 'active'}`}>
            <ul>
                { navLinks.map((link, index) => (
                    <li key= {index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
            <span className = "menu-avatar-container">
                <Avatar size={38} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
            </span>
        </div>
        <i className ="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
    </nav>)
}