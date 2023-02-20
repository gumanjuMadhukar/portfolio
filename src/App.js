
import './App.css';
import Index from './pages';
import NavbarPortfolio from './pages/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarPortfolio/>
       <Index/>
      </header>
    </div>
  );
}

export default App;
