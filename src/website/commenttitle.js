import React from 'react';

class CommentTitle extends React.Component {
    state = {  } 
    render() { 
        return (
            <h3>{this.props.newtitle}</h3>
        );
    }
}
 
export default CommentTitle;