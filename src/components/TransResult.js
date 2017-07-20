import React, { Component } from 'react';

export default class TransResult extends Component {
    render(){
        const { result } = this.props
        const resultJson = result + "?json=true"
        return(
            <div>
                {result && <section className="text-box">
                    <div className="h2">短短结果：</div>
                  
                    <div className="result">
                      {result}     || <a href={result} target="_blank">查看</a>
                    </div>
                    <div className="h2 result">API 地址： <a href={resultJson} target="_blank">查看</a></div>
                  
                    </section>
                }
            </div>
        )
    }
}