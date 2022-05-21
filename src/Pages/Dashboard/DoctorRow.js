import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, speciality, img } = doctor;
  
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td><div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt='' />
                    </div>
                </div></td>
                <td>{name}</td>
                <td>{speciality}</td>
                <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-error btn-xs">Delete </label>
                    
                </td>
            </tr>
        </>
    );
};

export default DoctorRow;