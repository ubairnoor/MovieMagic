
import './App.css';
import Header from './component/Header'
import BottomNavbar from './component/BottomNavigation'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
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
                <Route  path="/" element={<Trending />} exact />
                <Route  path="/movies" element={<Movies />} />
                <Route  path="/series" element={<Series />} />
                <Route  path="/search" element={<Search />} />

            </Routes>
         </div>
        <BottomNavbar/>
      </BrowserRouter>

  );
}

export default App;