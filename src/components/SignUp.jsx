import { useState } from 'react';
import illu from '../image/place/illu.png'
import eye2 from '../image/place/eye2.svg'
import facebook from '../image/place/facebook.svg'
import google from '../image/place/google.svg'
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="modal-content ">
      <div className="modal-header custom-modal-header d-flex justify-content-center mb-4 bg-success text-white bg-opacity-10 p-2 border border-info">
        Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
      </div>
      <div className="px-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="d-flex fw-bold">Create Account</h4>
          <button className="btn">Already have an account? <span className="text-primary">Sign In</span></button>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column gap-2">
                <div className="d-flex">
                  <input type="text" className="form-control custom-input" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  <input type="text" className="form-control custom-input" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <input type="email" className="form-control custom-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="d-flex align-items-center justify-content-between position-relative">
                  <input type="password" className="form-control custom-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button className="btn position-absolute" style={{ right: '10px' }}>
                    {/* Blank or placeholder image */}
                    <img src={eye2} alt="Placeholder" />
                  </button>
                </div>
                <input type="password" className="form-control mb-4 custom-input" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4" onClick={handleSubmit}>Create Account</button>
                <div className="d-flex flex-column gap-2">
                  <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                    {/* Replace src with actual image URL */}
                    <img src={facebook} alt="facebook" />
                    Sign Up with Facebook
                  </button>
                  <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                    {/* Replace src with actual image URL */}
                    <img src={google} alt="google" />
                    Sign Up with Google
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                {/* Blank or placeholder image */}
                <img src={illu} style={{ height: '200px',width:'200px' }} alt="atg-illustration" />
                <p className="info-signup">By signing up, you agree to our Terms & conditions, Privacy policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>``
    </div>
  );
};

export default SignUp;
