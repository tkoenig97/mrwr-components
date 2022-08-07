import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" 
                            timeAgo="Today at 4:45PM" 
                            text="Nice Blog Post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" 
                            timeAgo="Today at 2:00AM" 
                            text="Fat Stu"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" 
                            timeAgo="Yesterday at 5:00PM" 
                            text="Cockerspaniel"
                />
            </ApprovalCard>
        </div>
    ); 
};

ReactDOM.render(<App />, document.querySelector('#root'));
