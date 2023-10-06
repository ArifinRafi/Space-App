import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Ball from './components/Ball';
import Playground from './pages/Playground';
import HumanCheck from './pages/HumanCheck';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Homepage></Homepage>}, 
    {path: 'playground', element: <Playground></Playground>},
    {path: 'check', element: <HumanCheck></HumanCheck>}
    
])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
   </div>
  );
}

export default App;
