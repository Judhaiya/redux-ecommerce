import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider>
        <Navbar />
      </Provider>
    </div>
  );
}

export default App;
