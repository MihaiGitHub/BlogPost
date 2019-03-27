import React from 'react';

const ApprovalCard = props => {
    console.log(props); // CommentDetail component shows under children property

    return (
        <div className="ui card">
            <div className="content">
                {props.children} {/* Display entire CommentDetail component */}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;