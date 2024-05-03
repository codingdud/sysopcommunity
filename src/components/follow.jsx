import React from 'react'

export default function Follow({ icon, name }) {
    return (
        <div class="d-flex justify-content-between align-items-center position-relative mb-3">
            <div class="d-inline-flex align-items-center gap-2 position-relative">
                <div class="position-relative" style={{width: '40px',height:'40px'}}>
                    <img class="position-absolute top-0 start-0 w-100 h-100 rounded-circle" alt="png" src={icon} />
                </div>
                <div>
                    <div class="position-relative font-weight-bold text-black fs-5">
                        {name}
                    </div>
                    <spam className='d-lg-none'>1.4k views</spam>
                </div>
            </div>
            <button className='btn btn-sm btn-light rounded-pill'>
                Follow
            </button>
        </div>
    )
}
