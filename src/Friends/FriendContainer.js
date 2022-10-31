import './FriendContainer.css';
import FriendComponent from "./FriendComponent";

function onEventFriendClicked()
{
    console.log("Friend clicked");
}

export default function FriendContainer() {
    return (
        <>
            <div className="flex-container">
                <h1>Friends</h1>
                <FriendComponent name = "Bonke Smith"/>
            </div>
        </>
    );
}