import React,{Component} from 'react';
import styles from  '../assets/css/user.module.css';

export default class User extends Component{
    logout=()=>{
        window.localStorage.removeItem('user');
        this.props.history.push('/login')
    };

    render(){
        return (
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2><img src="/images/headimg.png" alt=""/></h2>
                    <div className={styles["user-box"]}>
                        <a>昵称</a>
                        <a onClick={this.logout}>注销</a>
                    </div>
                    <ul className={styles.clear}>
                        <li>
                            <span>0</span>
                            <p>关注</p>
                        </li>
                        <li>
                            <span>0</span>
                            <p className={styles.end}>粉丝</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.docList}>
                    <ul>
                        <li className={styles["gk-text"]}>
                            <i></i>
                            <p>公开博文</p>
                            <b></b>
                            <span>0</span>
                          </li>
                        <li className={styles["mm-text"]}>
                            <i></i>
                            <p>秘密博文</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles["cg-text"]}>
                            <i></i>
                            <p>草稿箱</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles["sc-text"]}>
                            <i></i>
                            <p>收藏夹</p>
                            <b></b>
                            <span>0</span>
                        </li>
                        <li className={styles.my_cz}>
                            <i></i>
                            <p>收藏夹</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}