import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard />
           <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                comment="Good Post!" 
                image={faker.image.avatar()} />
           <CommentDetail 
                author="Alex" 
                timeAgo="Today at 4:35PM" 
                comment="Great advice."
                image={faker.image.avatar()} />
           <CommentDetail 
                author="Jane" 
                timeAgo="Today at 5:55PM" 
                comment="Please post some more." 
                image={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));