import React,{Component} from 'react';
import styles from './uc-button.module.css'
import propTypes from 'prop-types';

export default class UcButton extends Component{

    static defaultProps={
        clickHandler:()=>{},
        size:'default',
        style:{}
    };

    static propTypes={
        clickHandler: propTypes.func,
        type: propTypes.string,
        style: propTypes.object,
    };

    render(){

        let {clickHandler,children,size,style}=this.props;

        return (
            <button
                type="button"
                className={styles['login-button'] + ' ' + styles[`login-button--${size}`]}
                style={style}
                onClick={(ev)=>clickHandler(ev)}
            >{children ? children : '按钮'}</button>
        )
    }
}