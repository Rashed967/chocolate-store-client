
import './App.css'
import { useLoaderData } from 'react-router-dom'
import ChocolateRow from './components/ChocolateRow'
import { useState } from 'react'

function App() {
  const loadedChocolate = useLoaderData()
  const [chocolates, setChocolates] = useState(loadedChocolate)


  return (
    <>
     
      <h1 className='text-4xl font-bold'>Online Chocolate Shop</h1>

      <h3 className='mt-6 font-medium text-2xl'>Total Chocolate Found : {loadedChocolate.length}</h3>

   {/* table  */}

   <div className="overflow-x-auto mt-5">
  <table className="table">
    {/* head */}
    <thead className='text-xl'>
      <tr>
        <th>
          picture
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
      chocolates.map(chocolate => <ChocolateRow 
        key={chocolate._id} 
        chocolate={chocolate} 
        chocolates={chocolates}
        setChocolates={setChocolates}
        
        />)
    }

    </tbody>

    
  </table>
</div>
   
    
      
    </>
  )
}

export default App
