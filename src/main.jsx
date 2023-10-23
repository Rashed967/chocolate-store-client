import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreateChocolate from './components/CreateChocolate.jsx'
import UpdateChocolate from './components/updateChocolate.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    loader : () => fetch('http://localhost:5000/chocolates')
  },
  {
    path : "createChocolate",
    element : <CreateChocolate />
  },
  {
    path : "updateChocolate/:id", 
    element : <UpdateChocolate />,
    loader : ({params}) => fetch(`http://localhost:5000/chocolates/${params.id}`) 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
