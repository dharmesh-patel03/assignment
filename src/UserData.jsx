import React from 'react'

const UserData = ({ user }) => {
    return (
        <div className='bg-orange-600  p-6 flex flex-col sm:flex-row gap-3 text-white items-center cursor-pointer'>
            <div className="profile-image ">
                <img src={user.avatar} className=' w-64 sm:w-32' alt="" />
            </div>
            <div className="content  p-6">
                <div className="profile-name">
                    <h3 className="text-2xl font-bold ">{`${user.first_name} ${user.last_name}`}</h3>
                </div>
                <div className="profile-email mt-3">
                    <p>{user.email}</p>
                </div>
            </div>
        </div>
    )
}

export default UserData