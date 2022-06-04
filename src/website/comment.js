import React from 'react';
import CommentDescription from './commentdescription';
import CommentTitle from './commenttitle';

class Comment extends React.Component {
    
    state = { 
        commentlikes: parseInt(this.props.likes)
     } 
    welcome = ()=>{
        return (
            <h2>I am from function planet</h2>
        )
    }

    sayHello=()=>{
        console.log("Hello....")
        this.setState({commentlikes: this.state.commentlikes +1})
    }

    render() { 
        return (
            <div>
                 <h3>Comment component </h3>
                 Likes: {this.state.commentlikes} 
                 <button onClick={this.sayHello}>Like</button>
                 {this.welcome()}
                 <CommentTitle newtitle={this.props.ctitle}></CommentTitle>
                 <CommentDescription newdesc={this.props.desc}></CommentDescription>
                 <hr></hr>
            </div>
           
        );
    }
}
 
export default Comment;