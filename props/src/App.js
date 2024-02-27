import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
        <Header name="Tu mama" lastname="tu papa"/>
        <Main greetings="Howdy"/>
        <Sidebar greetings="Hi"/>
    </div>
  );
}

export default App;
