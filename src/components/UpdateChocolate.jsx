import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateChocolate = () => {
    const loadedChocolate = useLoaderData()
    const {name, category, photourl, country, _id} = loadedChocolate;

    // update info fetch 
    const updateChocolate = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const photourl = form.photourl.value;
        const country = form.country.value;
        const createdChocolate = {name, category, photourl, country} 
        
        // send data the server 
        fetch(`http://localhost:5000/chocolates/${_id}`, {
            method : "PUT", 
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(createdChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
              
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Chocolate info updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error => console.error(error))
    }
    
    return (
        <div>
           
            <h1 className='text-4xl font-bold'>Update info of (<span className='text-red-600'>{name})</span></h1>

            <div className='mt-16 '>

            <div className='bg-blue-400 text-white p-3 w-2/4 mx-auto'>
            <h1 className='text-4xl font-bold'>Create chocolate</h1>
            </div>

            <div className='mt-16 bg-emerald-400 p-12 rounded-md'>
                <form onSubmit={updateChocolate}>

                    <div className='w-3/5 mx-auto space-y-4'>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl text-white">Name</span>
                            </label>
                            <input defaultValue={name} name="name" type="text" placeholder="Chocolate name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl text-white">Country</span>
                            </label>
                            <input defaultValue={country} name="country" type="text" placeholder="country name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl text-white">Photo Url</span>
                            </label>
                            <input defaultValue={photourl} name="photourl" type="text" placeholder="photo url" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                        <label className="label">
                                <span className="label-text text-xl text-white">Category</span>
                            </label>
                        <select defaultValue={category} name='category' className="select select-bordered w-full ">
                            <option disabled>white chocolate</option>
                            <option>milk chocolate</option>
                            <option>dark chocolate</option>
                        </select>
                        </div>
                        <div className="form-control w-full mt-3">
                        <button type='submit' className="btn btn-white text-black font-semibold">Success</button>
                        </div>  

                    </div>
                </form>
            </div>

        </div>
        </div>
    );
};

export default UpdateChocolate;