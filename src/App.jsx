import { Suspense } from 'react';
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'
import Players from './components/player/Players';

const fetchPlayer = async () =>{
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayer();
  return(
    <>
    <Navbar/>
    <Banner/>
    <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
    <Players playersPromise={playersPromise}/>
    </Suspense>
    </>

  )
}

export default App
