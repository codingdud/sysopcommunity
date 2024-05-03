import { useState } from 'react'
import Stack from 'react-bootstrap/Stack'
import Card from "../components/card"
import HeroSection from "../components/hero"
import down from "../assets/downA.svg"
import line from "../assets/Line.svg"
import PostNav from '../components/postnav'
import SideBar from '../components/sidebar'
import LoginPage from '../components/loginpage'
import Model from '../components/model'
import CARDS from '../util/card'
//console.log(CARDS);
export default function home() {
    const [show, setShow] = useState(false);
    function handleOpen(){
        console.log("hello");
        setShow(true);
    }
    function handleClose(){
        console.log("close");
        setShow(false);
    }
    return (
        <div>
            <HeroSection />
            <div class="container">
                <div className="row d-none d-lg-block sticky-top bg-white">
                    <PostNav />
                </div>
                <div className="row d-none d-lg-block position-relative">
                    <hr class="mx-auto mt-0" style={{ maxWidth: '1040px' }} />
                    <img className="img-fluid position-absolute  top-0 start-0 " style={{ height: '2px', width: '100%' }} src={line} alt="Line" />
                </div>
                <div className="row">
                    <div class="col-12 col-lg-8 p-4 ">
                        <div className="d-flex justify-content-between align-items-center position-relative pb-4 d-lg-none">
                            <div className="">
                                <strong>Post(369)</strong>
                            </div>
                            <button className='btn btn-sm btn-light d-inline-flex align-items-center gap-2 position-relative'>
                                Filter:All
                                <img alt="share" src={down} />
                            </button>
                        </div>
                        <Stack className='p-3' gap={3}>
                            {CARDS.map((card,index) => (<Card key={index} card={card} />))}
                        </Stack>
                    </div>
                    <div class="col-4 d-none d-lg-block p-4">
                        <SideBar />
                    </div>
                </div>
            </div>
            <button onClick={handleOpen} className="btn border border-0  circle-write-post  rounded-circle d-flex justify-content-center align-items-center position-fixed d-lg-none" style={{ bottom: '18px', right: '18px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27 54C41.9117 54 54 41.9117 54 27C54 12.0883 41.9117 0 27 0C12.0883 0 0 12.0883 0 27C0 41.9117 12.0883 54 27 54ZM31.9587 18.29C32.1488 18.1 32.4087 18 32.6587 18C32.9188 18 33.1688 18.09 33.3688 18.29L35.7087 20.63C36.0988 21.02 36.0988 21.65 35.7087 22.04L33.8787 23.87L30.1287 20.12L31.9587 18.29ZM29.9788 24.94L29.0588 24.02L19.9988 33.08V34H20.9188L29.9788 24.94ZM29.0588 21.19L17.9988 32.25V36H21.7488L32.8088 24.94L29.0588 21.19Z" fill="#F65878" />
                </svg>
            </button>
            {show&&(<div className={`mobile-modal-overlay d-lg-none ${show ? 'active' : ''}`}>
                <div className="modal-content" style={{ bottom: show ? '0' : '100vh' }}>
                    <Model open={show} closemodel={handleClose} >
                        <LoginPage closemodel={handleClose}/>
                    </Model>
                </div>
            </div>)}
        </div>
    )
}
