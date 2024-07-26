const FriendList = ({ friends }) => <ul className="friend-list">
    {friends.map(friend => <li className="item" key={friend.id}>
        <span className="status">{friend.isOnline ? 'Online' : 'Offline'}</span>
        <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p className="name">{friend.name}</p>
    </li>)}
</ul>

export default FriendList;