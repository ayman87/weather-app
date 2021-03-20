import './App.css';
import CastTabs from './Components/CastTabs';
import CurrentCast from './Components/CurrentCast';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <CurrentCast></CurrentCast>
      <CastTabs></CastTabs>
    </div>
  );
}

export default App;
