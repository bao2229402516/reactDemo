import React,{Component} from 'react';
import propTypes from 'prop-types'
import styles from './UcNav.module.css'
import {withRouter} from 'react-router-dom'

class UcNav extends Component{

    static defaultProps={
        bgColor:'#fff',
        arrow:'default',
        borderWidth:1,
    };

    static propTypes={
        bgColor:propTypes.string,
        arrow:propTypes.string,
        borderWidth:propTypes.number
    };

    render(){
        let {bgColor, borderWidth,arrow,history} = this.props;
        return (
            <div className={styles.nav} style={{background:bgColor, borderWidth}}>
                <div className={styles.arrow}>
                    <div
                        className={arrow === 'gray' ? styles.gray : styles.default}
                        onClick={()=>history.go(-1)}
                    ></div>
                </div>
            </div>
        )
    }
}

export default withRouter(UcNav)