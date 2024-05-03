import React from 'react'
import threedot from '../assets/threedot.svg'
import eye from '../assets/eye.svg'
import share from '../assets/share.svg'
export default function Card({ card }) {
    return (
        <div class="card shadow" style={{ width: '95%' }}>
            {card?.link && (<div className='position-relative'>
                <div class="position-absolute top-0 start-0  p-3 d-none">animesh kumar github:@codingdud</div>
                <img className='card-img-top img-fluid' style={{ maxHeight: '250px' }} src={card.link} alt='img'/>
            </div>)}
            <div class="card-body">
                <strong>{card?.type}</strong>
                <h5 class="card-title">{card?.title}</h5>
                {card?.description&&(<div class="d-flex justify-content-between align-items-center position-relative">
                    <p class="card-text">{card?.description}</p>
                    <button className='btn btn-sm btn-light'>
                        <img alt="Vector" src={threedot} />
                    </button>
                </div>)}
                {card?.url && (<div className='p-2'>
                    <button className='btn btn-outline-success w-100'>{card?.url}</button>
                </div>)}
                <div class="d-flex justify-content-between align-items-center position-relative">
                    <div class="d-inline-flex align-items-center gap-2 position-relative">
                        <div class="position-relative" style={{ width: '40px', height: '40px' }}>
                            <img class="position-absolute top-0 start-0 w-100 h-100 rounded-circle" alt="png" src={card?.image} />
                        </div>
                        <div>
                            <div class="position-relative font-weight-bold text-black fs-5">
                                {card?.name}
                            </div>
                            <spam className='d-lg-none'>1.4k views</spam>
                        </div>
                    </div>
                    <div className="d-inline-flex align-items-center gap-2 position-relative">
                        <div className='d-inline-flex align-items-center gap-1 position-relative d-none d-lg-block'>
                            <img class="position-relative w-18 h-18 object-cover" alt="png" src={eye} />
                            <spam>{card?.views}</spam>
                        </div>
                        <button className='btn btn-sm btn-secondary d-inline-flex align-items-center gap-2 position-relative'>
                            <img alt="share" src={share} />
                            <span className='d-lg-none'>Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
