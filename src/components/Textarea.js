import React, { Component } from 'react';
import PropTypes  from 'proptypes';

import {isUrl} from '../util';

let timeoutId;

export default class Textarea extends Component {

    static propTypes = {
        changeVal: PropTypes.func.isRequired
    }

    state = {
        text: '',
        height: null
    }

    handleChange = e => {
        const { changeVal } = this.props
        const input = e.target
        if(input.value && input.value.length>5000){ return alert("请不要输入超过5000字符的文本！") }
        if(!isUrl(this.state.text) && /\n$/.test(input.value) ) return
        this.setState({
            text: input.value,
        })

        if(!isUrl(this.state.text)) return
        // 1秒后再执行查询
        timeoutId && clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            changeVal(input.value)
        }, 1*1000);
        
    }

    handleKeyDown = e =>{
        
        if(e.keyCode!==13) return;

        this.handleChange(e)
        
        // if(isUrl(e.target.value)){
        // window.open('/translate/page?u='+encodeURIComponent(e.target.value))
        // }
    }

    render() {
       

        return (
        <div className="text-box">
                 <input className="search-input"
                    style={ this.state.height && { height: this.state.height } }
                    placeholder="🎃🎃输入网址完毕回车即可完成 🎃🎃"
                    autoFocus="true"
                    value={ this.state.text }
                    onChange={ this.handleChange }
                    onKeyDown={ this.handleKeyDown }
             />
             {/* <div className="button-box">
                 
                 <button onClick={ this.handleChange } type="button font-kai" className="btn btn-large btn-block btn-default">变变变</button>
                 
             </div> */}
             
        </div>
        )
  }
}