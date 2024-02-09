import { useState, FC, useEffect } from 'react'
import { Intro } from './components/intro'
import { Index } from './components';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { User } from './components/user';
import { Activity } from './components/activity';
import { CalendarActivity } from './components/calendarActivity';
import { CreateProfile } from './components/createProfile';
import { Accout } from './components/accout';
import { TableLeaning } from './components/tableLeaning';
import { ActivityInfo1 } from './components/activity1';
import { ActivityInfo2 } from './components/activity2';
import { ActivityInfo3 } from './components/activity3';
const App: FC = () => {
  const [count, setCount] = useState(0)
  const [isFadeIndex, isSetFadeIndex] = useState(false)
  useEffect(() => {
    isSetFadeIndex(false);
    setTimeout(() => {
      isSetFadeIndex(true);
    }, 3300)
  }, []);

  return (
    <div className=''>

      <Router>
        <Routes>
          <Route path="/" element={
            isFadeIndex ?
              <Index />
              :
              <Intro />
          } />
          <Route path="/user/" element={<User />} />
          <Route path="/user/accout" element={<Accout />} />
          <Route path="/user/creation" element={<CreateProfile/>} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/activity/1" element={<ActivityInfo1 />} />
          <Route path="/activity/2" element={<ActivityInfo2 />} />
          <Route path="/activity/3" element={<ActivityInfo3 />} />
          <Route path="/activity/calendar" element={<CalendarActivity/>} />
          <Route path="/table/learning" element={<TableLeaning/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
