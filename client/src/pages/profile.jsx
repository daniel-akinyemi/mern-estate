import {useSelector} from 'react-redux'

const Profile = () => {
  const {currentuser} = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentuser.avatar} alt='profile' className='self-center mt-2 rounded-full h-24 w-24 object-cover cursor-pointer'></img>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'/>
        <input type='text' placeholder='email' className='border p-3 rounded-lg' id='email'/>
        <input type='text' placeholder='password' className='border p-3 rounded-lg' id='password'/>
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover: opacity-95 disabled:opacity-80'>Update</button>

      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile