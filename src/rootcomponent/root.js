import React from 'react';
import CommentList from '../website/commentlist';
import RemoteData from '../website/remotedata';



class FirstComponent extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to React. I am learning.</h1>
                    <h1>I am not allowed!</h1>
                </div>
                <div>
                    <h2>Me too!</h2>
                </div>
                <div>
                    <CommentList></CommentList>
                    <RemoteData></RemoteData>
                </div>
            </div>
        );
    }
}

export default FirstComponent;