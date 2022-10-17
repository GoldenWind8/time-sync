import './App.css';
import FriendContainer from "./Friends/FriendContainer";
import ProfileContainer from "./Friends/ProfileContainer";
import CalendarContainer from "./CalendarContainer";

function App() {
  return (
    <div className="App">
      <div className="main-container">
          <ProfileContainer/>
          <div className="calendar-container">
              <CalendarContainer/>
          </div>
          <FriendContainer/>
      </div>
    </div>
  );
}

export default App;
