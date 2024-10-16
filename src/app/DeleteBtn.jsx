"use-client"
import React from 'react'

function DeleteBtn({ id }) {

    const handleDelete = async () => {
        const confirmed = confirm('Are you sure you want to delete');
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
                method: 'DELETE'
            })

            if (res.ok) {
                window.location.reload();
            }
        }
    }
    // Implement the delete functionality here.
    return (
        <a onClick={handleDelete} className='bg-red-500 text-white border py-1  px-2 rounded-md text-lg mx-2'>
            Delete
        </a>
    )
}

export default DeleteBtn
