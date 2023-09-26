import React, { Component } from 'react'
import Shimmer from './Shimmer';

export default class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : null,
        }
    }
    async componentDidMount(){
        const res = await fetch("https://api.github.com/users/anilkpl");
        const data = await res.json()
        // console.log(data)
        this.setState({data : data})
    }
  render() {
    if(this.state.data === null) return <Shimmer />;
    const {avatar_url,name} = this.state.data
    return (
     <div className='user-container'>
        <img src={avatar_url}/>
        <span>
            <h2>{name}</h2>
        </span>
     </div>
    )
  }
}
