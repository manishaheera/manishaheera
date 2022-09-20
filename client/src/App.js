import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
    </div>
  );
}

export default App;
