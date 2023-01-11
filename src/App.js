
import './App.css';
import FoodData from './resources/FoodData';
import Hooks from './components/hooks';


function App() {
  return (
    <div className="App">
      {/* <Pronutrition test={FoodData}/> */}
      <Hooks test={FoodData}/>
    </div>
  );
}

export default App;