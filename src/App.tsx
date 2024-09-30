import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Graphs from './components/Graphs/Graphs';

function App() {
  return (
    <div className="App">
    <div className="app-container">
      <Sidebar />
      <Graphs />
    </div>
  </div>
  );
}

export default App;
