import React,{Component} from 'react';
import Cell from "../components/cell";

export default class Follow extends Component{

    state={
        follow:[]
    };

    async componentDidMount(){
        let res =  await React.axios({url:'/api/goods/follow',params:{_page:1,_limit:8}})
        this.setState({follow:res.data.data})
    }

    render(){
        let {follow}=this.state;
        return (
            <div className="pt">
                {
                    follow.map((item,index) => (
                        <Cell
                            key={item._id}
                            index={index}
                            data={item}
                            to={{pathname:'/detail',apiname:'follow'}}
                        >
                        </Cell>
                    ))
                }
            </div>
        )
    }
}