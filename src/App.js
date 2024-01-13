import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Card from './pages/Card';
import Todos from './pages/Todos';
import Posts from './pages/Posts';
import Gapley from './pages/Gapley';
import Koment from './pages/Koment';
import Undifined from './pages/Undifined';



function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Card/>}/>
          <Route path='/Todos' element={<Todos/>}/>
          <Route path='/Posts' element={<Posts/>}/>
          <Route path='/Gapley' element={<Gapley/>}/>
          <Route path='/Koment' element={<Koment/>}/>
          <Route path='Undifined' element={<Undifined/>}/>
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  );
}

export default App;
