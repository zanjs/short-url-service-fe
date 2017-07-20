import React,{Component} from 'react';

export default class Doc extends Component {
    render(){
        return(
            <div>
                <table className="">
                    <tr>
                        <th>
                            名称
                        </th>
                        <th>
                            地址
                        </th>
                        <th>
                            请求方式
                        </th>
                        <th>
                            参数
                        </th>
                    </tr>
                </table>
            </div>
        )
    }
}