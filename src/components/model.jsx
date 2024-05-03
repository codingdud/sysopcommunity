import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import x2 from '../image/place/x2.svg'
export default function Model({ children, open, closemodel }) {
    const ref = useRef();
    useEffect(() => {
        if (open) {
            ref.current.showModal()
        } else {
            try {
                ref.current.close()
            } catch (error) {
                console.log(error)
            }
        }
    }, [open])
    return createPortal(
       <dialog className='border  border-0  rounded-4 w-20' ref={ref}>
            {open&&(<div>
                {children}
                <button className='border  border-0 position-absolute top-0 end-0 mt-2 me-2 btn  rounded-pill' onClick={closemodel}>
                <img alt="share" src={x2} />
                </button>           
             </div> )}
        </dialog>,
        document.getElementById("model")
    )
}
