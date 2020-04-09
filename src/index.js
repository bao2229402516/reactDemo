import React from 'react';
import ReactDom from 'react-dom';
import './utils/font';
import './assets/css/index.css'
import Default from "./layouts/default";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './plugins/axios'
import {serverBaseUrl} from './server';
React.baseUrl = serverBaseUrl;
React.Component.prototype.baseUrl=serverBaseUrl;

ReactDom.render(
    <Router>
        <Route component={Default}/>
    </Router>,
    document.querySelector('#root')
);
