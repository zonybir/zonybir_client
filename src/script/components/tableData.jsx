import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class TableData extends  Component{
    constructor(props){
        super(props);
        const data=[
            {title:'食',children:[{type:'外卖',detail:'',amount:'56.00'},{type:'早餐',detail:'',amount:'11.5'},{type:'午餐',detail:'',amount:'36.00'},
                {type:'晚饭',detail:'',amount:'26.00'},{type:'下午茶',detail:'',amount:'30.00'}]},
            {title:'娱',children:[{type:'香烟',detail:'',amount:'25.00'},{type:'游戏',detail:'',amount:'289.00'},{type:'看电影',detail:'',amount:'126.00'},
                {type:'游泳',detail:'',amount:'110.00'}]},
            {title:'行',children:[{type:'打车',detail:'',amount:'86.00'},{type:'膜拜',detail:'',amount:'0.50'},{type:'租车',detail:'',amount:'1260.00'}]},
            {title:'衣',children:[{type:'衬衣',detail:'',amount:'426.00'},{type:'T恤',detail:'',amount:'96.00'}]},
            {title:'住',children:[{type:'房租',detail:'',amount:'1850.00'},{type:'网费',detail:'',amount:'5.00'},{type:'电费',detail:'',amount:'116.00'},
                {type:'燃气费',detail:'',amount:'16.00'}]}
        ];
        this.state={
            list:data
        };
    }
    render(){
        let {data}=this.props;
        return(
            <div className='table_data'>
                {
                    data.map((v,k)=>{
                        let detailItem=v.children.map((vc,kc)=>{
                            return(
                                <ul className='type_detail_item' key={'type_detail_item_'+k+'-'+kc}>
                                    <li>{vc.type}</li>
                                    <li>{vc.detail}</li>
                                    <li>{vc.amount}</li>
                                </ul>
                            )
                        })
                        return(
                            <div className='class_type' key={'type_class_'+k}>
                                <div className='title'>{v.title}</div>
                                <div className='detail'>{detailItem}</div>
                            </div>
                        )
                    })    
                }
                
            </div>
        )
    }
    componentDidMount(){
    }
    componentWillReceiveProps(nextProps){
            
    }
}