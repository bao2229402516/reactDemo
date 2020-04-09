import React from 'react';
import {Link} from 'react-router-dom';

export default class NoPage extends React.Component{
    render(){
        return (
            <div>
                <p>404</p>
                <p>404</p>
                <p>404</p>
                <p>404</p>
                <p>404</p>
                <p>404</p>
                <Link to={'/home'}>回到首页</Link>
            </div>
        )
    }
}