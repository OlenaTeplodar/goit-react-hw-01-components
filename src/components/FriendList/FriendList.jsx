import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnLine }) => {
                return (
                    <FriendListItem key={id}
                        avatar={avatar}
                        name={name}
                        isOnLine={isOnLine} />
                );
            })}
        </ul>
    );
};

export default FriendList;

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnLine: PropTypes.bool,
        })
    ),
};