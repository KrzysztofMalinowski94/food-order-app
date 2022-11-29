import './App.css';
import FoodSection from './components/FoodSection/FoodSection';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <main><FoodSection/></main>
    </div>
  );
}

export default App;
