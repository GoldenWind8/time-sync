import './App.css';
import FriendContainer from "./Friends/FriendContainer";
import ProfileContainer from "./Friends/ProfileContainer";
import CalendarContainer from "./CalendarContainer";


const defaultUser = {
    name: "Sashin",
    date: "2020-10-10"
}
//use state storing user
function App() {
  return (
    <div className="App">
      <div className="main-container">
          <ProfileContainer/>
          <div className="calendar-container">
              <CalendarContainer user = {defaultUser}/>
          </div>
          <FriendContainer/>
      </div>
    </div>
  );
}

export default App;
