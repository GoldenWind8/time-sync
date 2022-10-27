import './FriendComponent.css';
import mainPP from '../data/Justin Stormers.png';
import flag from '../data/Flag-South-Africa.jpg';

export default function FriendComponent({name}) {
    return (
        <div className="friend-container" onClick={onEventFriendClicked}>
            <img className="profile-pic" src={mainPP}/>
            <h2 className="friend-name">{name}</h2>
            <img className="flag-icon" src={flag}/>
        </div>
    );
}