import React from 'react'

const Navbar = ({getUser}) => {
    
    return (

        <div className='py-4 bg-orange-600 navbar' onClick={getUser}>
            <button className="btn focus:outline-none block mx-auto">Get Users</button>
        </div>
    )
}

export default Navbar