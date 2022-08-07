import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" text="Nice Blog Post!"/>
            <CommentDetail author="Alex" timeAgo="Today at 2:00AM" text="Yo yo yo"/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" text="Cockerspaniel"/>
        </div>
    ); 
};

ReactDOM.render(<App />, document.querySelector('#root'));
