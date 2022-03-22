import './App.css';
import Header from './components/header/header';
import MyStake from './components/myStake/myStake';
import stakeHistory from './components/stakeHistory/stakeHistory';


function App() {
 
  const Stake = [
    {
      amount: 1000,
      account: "0xE428Db9A3B47046acb020B8B5a5B29b8792a1415",
      time: "25, jun 2021"
    },
    {
      amount: 1000,
      account: "0xE428Db9A3B47046acb020B8B5a5B29b8792a1415",
      time: "25, jun 2021"
    },
    {
      amount: 1000,
      account: "0xE428Db9A3B47046acb020B8B5a5B29b8792a1415",
      time: "25, jun 2021"
    },
    {
      amount: 1000,
      account: "0xE428Db9A3B47046acb020B8B5a5B29b8792a1415",
      time: "25, jun 2021"
    },
    {
      amount: 1000,
      account: "0xE428Db9A3B47046acb020B8B5a5B29b8792a1415",
      time: "25, jun 2021"
    },
    {
      amount: 1000,
      account: "0xE428Db9A3B47046acb020B8B5a5B29b8792a1415",
      time: "25, jun 2021"
    }
  ]

  return (
    <div className="app">
      <Header />
      <main className="main">
        <MyStake Stake = {Stake}/>
        <stakeHistory Stake = {Stake} />
      </main>
    </div>
  );
}
export default App;
