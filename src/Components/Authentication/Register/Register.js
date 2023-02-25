import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../Shared/Utilities/LoadingSpinner';

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [OTPSending, setOTPSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
          callback: () => {
            onSignUp();
          },
        },
        auth
      );
    }
  };

  const onSignUp = () => {
    setOTPSending(true);
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setOTPSending(false);
      })
      .catch((error) => {
        console.log(error);
        setOTPSending(false);
      });
  };

  // console.log(auth);

  const handlePhoneNumberInput = (inputtedNumber) => {
    if (inputtedNumber) {
      if (inputtedNumber.length === 1 && inputtedNumber.slice(0, 1) !== '0') {
        setErrorMessage('First digit must be 0');
      } else if (
        inputtedNumber.length === 2 &&
        inputtedNumber.slice(1, 2) !== '1'
      ) {
        setErrorMessage('Second digit must be 1');
      } else if (
        (inputtedNumber.length === 3 && inputtedNumber.slice(2, 3) === '0') ||
        inputtedNumber.slice(2, 3) === '1' ||
        inputtedNumber.slice(2, 3) === '2'
      ) {
        setErrorMessage('Enter a valid phone number');
      } else if (inputtedNumber.length > 11) {
        setErrorMessage('Phone number must be 11 digit');
        setPhoneNumber(null);
      } else if (inputtedNumber.length === 11) {
        setErrorMessage('');
        setPhoneNumber('+88' + inputtedNumber);
      }
    } else {
      setErrorMessage('');
    }
  };
  console.log(phoneNumber);

  return (
    <div className='mx-[5rem]'>
      <h2 className='text-center text-3xl'>Register</h2>
      <div className='card mx-auto w-full max-w-sm shadow-2xl'>
        <div className='card-body'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Phone</span>
            </label>
            <input
              type='number'
              min={0}
              placeholder='Enter your phone number'
              className='input input-bordered'
              onChange={(e) => handlePhoneNumberInput(e.target.value)}
            />
            <div className='text-center text-sm pt-1 text-red-500'>
              {errorMessage}
            </div>
          </div>
          <div className='form-control hidden'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input
              type='text'
              placeholder='password'
              className='input input-bordered'
            />
          </div>
          <div className='form-control'>
            <div id='recaptcha-container' />
            <button
              className='btn btn-primary'
              disabled={errorMessage}
              onClick={() => toast.success('OTP sent successfully!')}
            >
              <span className={`mr-2 ${!OTPSending ? 'hidden' : ''}`}>
                <LoadingSpinner />
              </span>
              <span>{OTPSending ? 'OTP sending' : 'Send OTP'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
