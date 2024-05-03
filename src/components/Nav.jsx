import logo from '../assets/logo.svg'
import down from '../assets/downA.svg'
import Model from './model'
import { useState } from 'react'
import SignUp from './SignUp'
export default function Nav() {
   const [open,setOpen]= useState(false)
   function closemodel(){
    setOpen(false)
   }
    return (
        <div className="d-flex justify-content-between align-items-center p-2">
            <img className="position-relative w-28 h-28 object-cover" alt="png" src={logo} />
            <div className="position-relative" style={{ width: '350px' }}>
                <input type='search' className='form-control  border-1 rounded-pill' placeholder='🔍 Search for your favorite groups in ATG' />
            </div>
            <button className='btn' onClick={()=>setOpen(!open)}>
                Create account.<strong className='text-primary'>It’s free!</strong>
                <img className="position-relative w-28 h-28 object-cover" alt="png" src={down} />
            </button>
            <Model open={open} closemodel={closemodel}>
                <SignUp/>
            </Model>
        </div>
    )
}
