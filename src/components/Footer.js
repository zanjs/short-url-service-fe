import React,{Component} from 'react';
import logo from '../shorts.svg';

export default class Error extends Component {
    render(){
       
        return(
            <div className="footer">
                <div className="footer-icon">
                    <img src={logo} alt="" className="footer-img" />
                    <span className="footer-text"> V0.0.5 By Anla Design ©2017 anla.io 版权所有  </span>
                    <span className="">
                        <a href="https://zanjs.com/"  rel="noopener noreferrer" target="_blank" >技术支持</a>
                    </span>
                </div>
            </div>
        )
    }
}