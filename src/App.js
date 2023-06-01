import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Pages/Home';
import Contacts from '../src/Pages/Contacts';
import About from '../src/Pages/About';
import Blog from '../src/Pages/Blog';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default App;
