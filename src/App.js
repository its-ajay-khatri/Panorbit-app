import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/home';
import DetailPage from './component/detailPage';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<DetailPage/>} />
 
      </Routes>
    </>
  );
}

export default App;
