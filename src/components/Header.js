import React, { Component } from 'react';
// import Anime from 'react-anime';
import logo from '../shorts.svg';

export default class Header extends Component {
    render() {
        const { loading } = this.props
        const isLoading = loading ? "dotting" : ""
        return (
        <div className="App">
            <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="logo-name font-kai"> 一沐断生
                <span className={isLoading}></span>
                </div>
            </div>
     
        </div>
        )
  }
}