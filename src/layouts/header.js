import React,{Component} from 'react';
import './header.css'
import {NavLink} from 'react-router-dom'

export default class Header extends Component{
    render(){
        return (
            <div className="nav">
                <ul>
                    <li><NavLink to="/home" activeClassName="active">首页</NavLink></li>
                    <li><NavLink to="/follow" activeClassName="active">关注</NavLink></li>
                    <li><NavLink to="/column" activeClassName="active">栏目</NavLink></li>
                </ul>
            </div>
        )
    }
}