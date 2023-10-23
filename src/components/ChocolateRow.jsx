import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ChocolateRow = ({ chocolate, chocolates, setChocolates}) => {
    const { name, category, photourl, country, _id} = chocolate

    const deleteChocolate = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/chocolates/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Chocolate has been deleted.',
                                'success'
                              )
                              const remainingChocolate = chocolates.filter(chocolate => chocolate._id !== id)
                              setChocolates(remainingChocolate)
                        }
                    })
            }
        })


       


    }
    return (
        <>
            <tr>
                <th>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photourl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <h3 className='font-medium text-base'>{name}</h3>
                    </div>
                </td>
                <td>
                    <h3 className=''><span className="font-medium badge badge-ghost p-4 badge-sm text-base">{country}</span></h3>
                </td>
                <td>{category}</td>
                <th className='space-x-3'>
                    <Link to={`updateChocolate/${_id}`}>
                    <button className="btn btn-success btn-xs">Update</button>
                    </Link>
                    <button onClick={() => deleteChocolate(_id)} className="btn btn-error btn-xs">Delete</button>
                </th>
            </tr>

        </>
    );
};

export default ChocolateRow;