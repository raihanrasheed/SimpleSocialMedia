import React, { Component } from 'react'

export default class Home3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            comment: [],

        }

    }

    commentFun=(e)=>{
        let list = []
        list.push({comment:e.target.value, date: new Date().toLocaleString()})
        this.setState({
            comment:list,
        })

console.log(this.state.comment)
console.log(this.state.date);
    }
    

  render() {
    return (
      <div>
        <input onChange={this.commentFun.bind(this)}></input>
      {this.state.comment.map((element,idx)=>{
        return 
        <>
        
        <div key={idx}>{element.comment} </div>
        <div key={idx}>{element.comment} </div>
     </>
       
      })}

      </div>
    )
  }
}
