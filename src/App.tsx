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
import { ActivityInfo4 } from './components/activity4';
import { Leaning } from './components/learning';
import { Learning1 } from './components/learning1';
import { Learning2 } from './components/learning2';
import { Learning3 } from './components/learning3';
import { Learning4 } from './components/learning4';
import { Learning5 } from './components/learning5';
import { Learning6 } from './components/learning6';
import { Learning7 } from './components/learning7';
import { Learning8 } from './components/learning8';
import { Learning9 } from './components/learning9';
import { Learning10 } from './components/learning10';
import { Learning11 } from './components/learning11';
import { Learning12 } from './components/learning12';
import { Learning13 } from './components/learning13';
import { Learning14 } from './components/learning14';
import { Learning15 } from './components/learning15';
import { Question } from './components/question';
import { About } from './components/about';
import { History } from './components/history';
import { Condition } from './components/condition';
import { StorageLearning } from './components/storageLearning';
import { Community } from './components/community';
import { Bookmark } from './components/bookmark';
import { Test } from './components/test';
import { Test1 } from './components/test1';
import { Classroom } from './components/classRoom';
const App: FC = () => {
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
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/user/accout" element={<Accout />} />
          <Route path="/user/test" element={<Test />} />
          <Route path="/user/test/1" element={<Test1 />} />
          <Route path="/question" element={<Question />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/storage/learning" element={<StorageLearning />} />
          <Route path="/services" element={<Condition />} />
          <Route path="/community" element={<Community />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/user/creation" element={<CreateProfile/>} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/activity/1" element={<ActivityInfo1 />} />
          <Route path="/activity/2" element={<ActivityInfo2 />} />
          <Route path="/activity/3" element={<ActivityInfo3 />} />
          <Route path="/activity/4" element={<ActivityInfo4 />} />
          <Route path="/learning" element={<Leaning />} />
          <Route path="/learning/1" element={<Learning1 />} />
          <Route path="/learning/2" element={<Learning2 />} />
          <Route path="/learning/3" element={<Learning3 />} />
          <Route path="/learning/4" element={<Learning4 />} />
          <Route path="/learning/5" element={<Learning5 />} />
          <Route path="/learning/6" element={<Learning6 />} />
          <Route path="/learning/7" element={<Learning7 />} />
          <Route path="/learning/8" element={<Learning8 />} />
          <Route path="/learning/9" element={<Learning9 />} />
          <Route path="/learning/10" element={<Learning10 />} />
          <Route path="/learning/11" element={<Learning11 />} />
          <Route path="/learning/12" element={<Learning12 />} />
          <Route path="/learning/13" element={<Learning13 />} />
          <Route path="/learning/14" element={<Learning14 />} />
          <Route path="/learning/15" element={<Learning15 />} />
          <Route path="/activity/calendar" element={<CalendarActivity/>} />
          <Route path="/table/learning" element={<TableLeaning/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App
