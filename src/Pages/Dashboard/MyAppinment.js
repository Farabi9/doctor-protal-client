import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppinment = () => {
  const [appoinments, setAppoinments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken')
            navigate('/');
          }
          return res.json()
        })
        .then(data => {
          setAppoinments(data)

        })

    }
  }, [user])
  return (
    <div>
      <h2 className='mt-5 text-2xl font-mono font-bold uppercase'>
        My Appoinments : {appoinments.length}
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className='font-mono'>Name</th>
              <th className='font-mono'>Date</th>
              <th className='font-mono'>Time</th>
              <th className='font-mono'>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {
              appoinments.map((a, index) => <tr>
                <th className='font-mono'>{index + 1}</th>
                <td className='font-mono'>{a.patientName}</td>
                <td className='font-mono'>{a.date}</td>
                <td className='font-mono'>{a.slot}</td>
                <td className='font-mono'>{a.treatment}</td>
              </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppinment;