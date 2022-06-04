import React from 'react';
import Comment from './comment';


class CommentList extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <h1>List of comment components will come here!</h1>
                <Comment likes="75" ctitle="Samsung Note 22" desc="Pen is cool!"></Comment>
                <Comment likes="53" ctitle="KL Sentral" desc="Place throbbing with colors and people" ></Comment>
                <Comment likes="35" ctitle="LG Dual Screen" desc="Phone can be used for multitasking"></Comment>
                <Comment likes="44" ctitle="ESP32 cam" desc="Code your own security cam!"></Comment>
            </div>

        );
    }
}

export default CommentList;