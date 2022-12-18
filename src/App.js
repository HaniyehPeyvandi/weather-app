import './App.css';
import WeatherApp from './components/WeatherApp/WeatherApp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <WeatherApp/>
      <ToastContainer />
    </div>
  );
}

export default App;
