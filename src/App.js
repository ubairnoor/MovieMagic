
import './App.css';
import Header from './component/Header'
import BottomNavbar from './component/BottomNavigation'
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Search from './Pages/Search/Search'
import Series from './Pages/Series/Series'
function App() {
  return (
      <BrowserRouter>
          
         <Header/>
         <div className="App">
         <Routes>
                <Route exact path="/" element={<Trending />} exact />
                <Route exact path="/movies" element={<Movies />} />
                <Route exact path="/series" element={<Series />} />
                <Route exact path="/search" element={<Search />} />

            </Routes>
         </div>
        <BottomNavbar/>
      </BrowserRouter>

  );
}

export default App;