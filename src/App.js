import './App.css';
import './style/style.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./components/Home";
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <div class="container wrapper">
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        <SideBar/>
        <Footer/>
      </div>
</div>
  );
}

export default App;
