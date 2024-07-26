import css from './FriendList.module.css';

const FriendList = ({ friends }) => <ul className={css.list}>
    {friends.map(friend => <li className={css.item} key={friend.id}>
        <span className={css.status} style={{"backgroundColor": friend.isOnline ? '#35a10e' : '#eb2a47'}}></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name}</p>
    </li>)}
</ul>

export default FriendList;