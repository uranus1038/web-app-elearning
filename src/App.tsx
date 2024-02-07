import { useState , FC ,useEffect} from 'react'
import { Intro } from './components/intro'
import { Index } from './components';
import './App.css' ; 
const App :FC = () => {
  const [count, setCount] = useState(0)
  const [isFadeIndex, isSetFadeIndex] = useState(false)
  useEffect(() => {
    isSetFadeIndex(false);
    setTimeout(()=>
    {
      isSetFadeIndex(true);
    },3300)
  }, []);

  return (
    <>
    {
      isFadeIndex ?
      <Index/>
      :
      <Intro/>
    }
 
    </>
  )
}
export default App
