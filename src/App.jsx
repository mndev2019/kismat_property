
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import WebLayout from './Layout/WebLayout'
import Home from './Home'


function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
     <Route path='/' element={<WebLayout/>}>
  <Route index element={<Home/>}/>
 
     </Route>
    )
  )

  return (
    <>
      <RouterProvider router={ThemeRoute}/>
      
    </>
  )
}

export default App
