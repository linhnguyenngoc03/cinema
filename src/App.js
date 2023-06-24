import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext';
import {Routes, Route} from "react-router-dom";
import Detail from './components/Detail';
import Contact from './components/Contact';
import About from './components/About';
import News from './components/News';
function App() {
  const { theme} = useContext(ThemeContext)
  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color}}>
    <Navigation/>
    <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/news' element={<News/>}></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
