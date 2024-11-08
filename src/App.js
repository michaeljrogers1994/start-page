import './App.css';
import CurrentTime from './components/CurrentTime';
import CurrentWeather from './components/CurrentWeather';
import SearchBar from './components/SearchBar';
import TimeOfDayGreeting from './components/TimeOfDayGreeting';
import ShortcutPage from './components/ShortcutPage';

function App() {
  const shortcuts = [
    { title: "YouTube", url: "https://www.youtube.com", icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" },
    { title: "Reddit", url: "https://www.reddit.com", icon: "https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-120x120.png" },
    { title: "GitHub", url: "https://github.com", icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
  ];

  return (
    <div className='App'>
      <TimeOfDayGreeting/>
      <CurrentWeather/>
      <SearchBar/>
      <ShortcutPage shortcuts={shortcuts} />
    </div>
    
  );
}

export default App;
