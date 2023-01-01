import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BloodDonar = () => {
const {user} = useContext(AuthContext);

     const url = `http://localHost/reservation?email=${user?.email}`;
      
       const { data: donation = [] } = useQuery({
            queryKey: ['reservation', user?.email],
            queryFn: async () => {
                const res = await fetch(url, {
                   
                })
                const data = await res.json();
                return data;
            }

       })
     console.log(donation);
    return (
        <div>
            <h2>this is donar pager</h2>
        </div>
    );
};

export default BloodDonar;