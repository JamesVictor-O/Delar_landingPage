import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import './App.css'

function App() {
    const router=createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<RootLayout/>}>
               
            </Route>
          )
    )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
