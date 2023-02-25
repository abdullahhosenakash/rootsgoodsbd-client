import {} from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import LoadingSpinner from '../../Shared/Utilities/LoadingSpinner';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [registering, setRegistering] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, registerError] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleRegister = (e) => {
    e.preventDefault();
    setRegistering(true);
    const userName = e.target.userName.value;
    const userEmail = e.target.userEmail.value;
    createUserWithEmailAndPassword(userEmail, password).then(async () => {
      const success = await updateProfile({ displayName: userName });
      console.log(success);
      if (success) {
        toast.success('Registered successfully!');
        setRegistering(false);
        e.target.reset();
      }
    });
  };
  console.log(user);

  return (
    <div className='mx-[5rem]'>
      <h2 className='text-center text-3xl'>Register</h2>
      <div className='card mx-auto w-full max-w-sm shadow-2xl'>
        <form onSubmit={(e) => handleRegister(e)}>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='Enter your name'
                className='input input-bordered'
                name='userName'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='Enter your email'
                className='input input-bordered'
                name='userEmail'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Enter a password'
                className='input input-bordered'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Retype Password</span>
              </label>
              <input
                type='password'
                placeholder='Retype password'
                className='input input-bordered'
                required
                onChange={(e) => {
                  const givenPassword = e.target.value;
                  if (givenPassword.length !== 0) {
                    if (givenPassword !== password) {
                      setErrorMessage('Password not matched');
                    } else {
                      setErrorMessage('');
                    }
                  } else {
                    setErrorMessage('');
                  }
                }}
                onFocus={() => setErrorMessage('')}
              />
            </div>

            <p className='text-center text-sm text-red-500'>{errorMessage}</p>
            <div className='form-control'>
              <button className='btn btn-primary' disabled={errorMessage}>
                <span className={`mr-2 ${!registering ? 'hidden' : ''}`}>
                  <LoadingSpinner />
                </span>
                <span>{registering ? 'Registering' : 'Register Now'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
