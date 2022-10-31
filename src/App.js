import './App.css';
import FriendContainer from "./Friends/FriendContainer";
import ProfileContainer from "./Friends/ProfileContainer";
import CalendarContainer from "./CalendarContainer";
import {useState} from "react";



var defaultUser = {
    name: "Sashin",
    date: "2020-10-10"
}



//use state storing user
function App() {

    const [calenderUser, setCalenderUser] = useState(defaultUser);
    function onCl()
    {
        console.log("Button clicked");
        defaultUser.name = defaultUser.name+ "2";   //TODO Ask why this does not update more than once
        setCalenderUser(defaultUser);
    }


      return (
        <div className="App">
            <button onClick={onCl}/>
          <div className="main-container">
              <ProfileContainer/>
              <div className="calendar-container">
                  <CalendarContainer user = {calenderUser}/>
              </div>
              <FriendContainer/>
          </div>
        </div>
      );
}

export default App;
