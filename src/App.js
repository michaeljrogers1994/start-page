import './App.css';
import CurrentTime from './components/CurrentTime';
import CurrentWeather from './components/CurrentWeather';
import SearchBar from './components/SearchBar';
import TimeOfDayGreeting from './components/TimeOfDayGreeting';

function App() {
  return (
    <div className='App'>
      <TimeOfDayGreeting/>
      <CurrentTime/>
      <CurrentWeather/>
      <SearchBar/>
    </div>
    
  );
}

export default App;
