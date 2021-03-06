import React from 'react';
import Friend from './Friend';
import '../App.css';

const FriendList = props => {
    return (
        <div>
            {props.friends.map(friend => {
                return <Friend friend={friend} key={friend.id} />;
            })}
        </div>
        
    )
};

export default FriendList;