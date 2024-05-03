import down from '../assets/downA.svg'
import join from '../assets/join.svg'
export default function PostNav() {
    return (
        <div class="d-flex justify-content-between align-items-center position-relative">
            <nav className='nav'>
                <a className='nav-link active' href="#">All Posts(32)</a>
                <a className='nav-link' href="#">Article</a>
                <a className='nav-link' href="#">Event</a>
                <a className='nav-link' href="#">Education</a>
                <a className='nav-link' href="#">Job</a>
            </nav>
            <div className="d-inline-flex align-items-center gap-2 position-relative">
                <button className='btn btn-sm btn-light d-inline-flex align-items-center gap-1 position-relative'>
                    Write a Post
                    <img alt="share" src={down} />
                </button>
                <button className='btn btn-sm btn-primary d-inline-flex align-items-center gap-1 position-relative'>
                    <img alt="share" src={join} />
                    Join Group
                </button>
            </div>
        </div>
    )
}
