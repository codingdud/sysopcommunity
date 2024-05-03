
import eye2 from '../image/place/eye2.svg'
import facebook from '../image/place/facebook.svg'
import google from '../image/place/google.svg'
import x2 from '../image/place/x2.svg'
export default function LoginPage({closemodel}) {
    return (
        <div className="d-flex flex-column p-4 w-100 bg-white">
            <button className='border  border-0 position-absolute top-0 end-0 mt-2 me-2 btn  rounded-pill' onClick={closemodel}>
            <img alt="share" src={x2} />
            </button>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="d-flex fw-bold">Create Account</h4>
            </div>
            <div className="d-flex">
                <input type="text" className="form-control custom-input" placeholder="First Name" />
                <input type="text" className="form-control custom-input" placeholder="Last Name" />
            </div>
            <input type="email" className="form-control custom-input" placeholder="Email" />
            <div className="d-flex align-items-center justify-content-between position-relative">
                <input type="password" className="form-control custom-input" placeholder="Password" />
                <button className="btn position-absolute" style={{ right: '10px' }}>
                    <img
                        src={eye2}
                        alt="eye"
                        width="18px"
                        height="18px"
                    />
                </button>
            </div>
            <input type="password" className="form-control mb-4 custom-input" placeholder="Confirm password" />
            <ul className="d-flex justify-content-between align-items-center mb-4 p-0">
                <a className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center" data-bs-dismiss="modal" href="/">
                    Create Account
                </a>
                <a className="link-underline-dark" href="/">
                    or, Sign In
                </a>
            </ul>
            <div className="d-flex flex-column gap-2 mb-4">
                <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                    <img
                        src={facebook}
                        alt="facebook"
                    />
                    Sign Up with Facebook
                </button>
                <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                    <img
                        src={google}
                        alt="google"
                    />
                    Sign Up with Google
                </button>
            </div>
            <p className="info-signup text-center">
                By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
        </div>

    )
}
