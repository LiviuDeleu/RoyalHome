import './App.css';
import Footer from './components/template/Footer';
import Header from './components/template/Header';
import HomePage from "./Pages/PageHome/HomePage"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
    
  );
  
}

export default App;
