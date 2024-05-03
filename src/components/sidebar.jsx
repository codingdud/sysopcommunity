import React from 'react'
import mapmarker from '../assets/mapmarker.svg'
import x from '../assets/x.svg'
import guid from '../assets/guid.svg'
import Stack from 'react-bootstrap/esm/Stack'
import user from '../image/user/user.png'
import Follow from './follow'
const USER=[
    {
        name:"halkat",
        icon:user
    },
    {
        name:"ronal",
        icon:user
    },
    {
        name:"kala rahul",
        icon:user
    },
    {
        name:"naha kakar",
        icon:user
    },
    {
        name:"dido james",
        icon:user
    },

]

export default function SideBar() {
    return (
        <Stack gap={4}>
            <div class="d-flex align-items-center gap-3">
                <img class="position-relative w-28 h-28 object-cover" alt="png" src={mapmarker} />
                <input type='text' className='form-control border-0 border-bottom' placeholder='Enter your location' />
                <button className='btn btn-sm btn-light'>
                    <img class="position-relative w-28 h-28 object-cover" alt="png" src={x} />
                </button>
            </div>
            <div class="d-flex align-items-start gap-1">
                <img class="position-relative w-28 h-28 object-cover" alt="png" src={guid} />
                <span className='text-muted'>Your location will help us serve better and extend a personalised experience.</span>
            </div>
            <div>
                <div class="d-flex align-items-center mb-4  gap-1">
                    <img class="position-relative w-28 h-28 object-cover" alt="png" src={guid} />
                    <h5>RECOMMENDED GROUPS</h5>
                </div>
                {USER.map((ob,index)=>(<Follow key={index} icon={ob.icon} name={ob.name}/>))}
            </div>
            <div className='text-end text-primary'>See More..</div>
        </Stack>
    )
}
