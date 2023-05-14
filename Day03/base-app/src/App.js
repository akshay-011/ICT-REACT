import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Form';
import Home from './Home';
import NavBar from './NavBar';
import ViewDetails from "./ViewDetails"

const dark = createTheme({
  palette:{
    mode:'dark'
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={dark}>
        <CssBaseline>
      
      <NavBar/>
      <br /><br /><br />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/form' element={<Form/> } />
        <Route path='/details' element={<ViewDetails/>}></Route>
      </Routes>

        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
