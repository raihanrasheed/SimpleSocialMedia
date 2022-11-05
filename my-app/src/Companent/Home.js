import React, { Component } from 'react';
import Home2 from './Home2';
import Home3 from './Home3';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            think: '',
        arrAdd:[]
    }}

    addPOST(e){
      

this.setState({
think:e.target.value,

});


}
   handellSubmit(e){
    e.preventDefault();
    var post1=(this.state.think)
    const posts = []
    posts.push(this.state.think)
    // console.log(posts)
  
    this.setState({
       arrAdd: posts,
        think:''
        
    });
    // console.log(this.state.arrAdd)
    
 
   } 
    render() {
        return (
            <div>
                <form onSubmit={this.handellSubmit.bind(this)}>
             <textarea value={this.state.think} onChange={this.addPOST.bind(this)}></textarea>
             <br></br>
             <button >Add Post</button>
              </form>
             
              
            </div>

        );
    }
}

export default Home;