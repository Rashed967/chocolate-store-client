import React from 'react';
import Swal from 'sweetalert2';

const CreateChocolate = () => {

    // create chocolate 
    const createChocolate = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const photourl = form.photourl.value;
        const country = form.country.value;
        const createdChocolate = {name, category, photourl, country} 
        
        // send data the server 
        fetch('http://localhost:5000/chocolates', {
            method : "POST", 
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(createdChocolate)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
              
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Chocolate added to database',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='mt-16 '>

            <div className='bg-blue-400 text-white p-3 w-2/4 mx-auto'>
            <h1 className='text-4xl font-bold'>Create chocolate</h1>
            </div>

            <div className='mt-16 bg-emerald-400 p-12 rounded-md'>
                <form onSubmit={createChocolate}>

                    <div className='w-3/5 mx-auto space-y-4'>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl text-white">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Chocolate name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl text-white">Country</span>
                            </label>
                            <input name="country" type="text" placeholder="country name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl text-white">Photo Url</span>
                            </label>
                            <input name="photourl" type="text" placeholder="photo url" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full ">
                        <label className="label">
                                <span className="label-text text-xl text-white">Category</span>
                            </label>
                        <select name='category' className="select select-bordered w-full ">
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
    );
};

export default CreateChocolate;