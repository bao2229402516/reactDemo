import React,{Component} from 'react';
import Header from "./header";
import Footer from "./footer";
import {Switch,Route,Redirect} from 'react-router-dom'
import Home from "../pages/Home";
import Follow from "../pages/Follow";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import NoPage from "../pages/NoPage";
import Loading from "../components/loading/loading";
import pubsub from 'pubsub-js';

export default class Default extends Component{

    state = {
        bNav:false,
        bFoot:false,
        bLoading:false
    };

    constructor(props) {
        super(props);

        pubsub.subscribe('UPDATE_LOADING', (mess, data) => {
            this.setState({bLoading:data})
        })
    };

    static getDerivedStateFromProps(nextProps, nextState){

        let path = nextProps.location.pathname;

        if(/home|follow|column/.test(path)){
            return{
                bNav: true,
                bFoot: true
            }
        }

        if(/login|reg|detail/.test(path)){
            return{
                bNav: false,
                bFoot: false
            }
        }

        if(/user/.test(path)){
            return{
                bNav: false,
                bFoot: true
            }
        }
    }

    render(){

        let {bNav, bFoot, bLoading} = this.state;

    return (
        <div className="default">
            {bLoading ? <Loading/> : null}
            {bNav ? <Header/> : null}
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/follow" component={Follow}/>
                <Route path="/column" component={Column}/>
                <Route path="/user" component={User}/>
                <Route path="/Login" component={Login}/>
                <Route path="/reg" component={Reg}/>
                <Route path="/detail/:_id" component={Detail}/>
                <Redirect exact from="/" to="/home" />
                <Route component={NoPage}/>
            </Switch>
            {bFoot ? <Footer/> : null}
        </div>
    )
    }
}