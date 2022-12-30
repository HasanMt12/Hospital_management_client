import { useQuery } from '@tanstack/react-query';
import React from 'react';

const NoticeShow = () => {

    const {data: notice = [] , refetch } = useQuery({
        queryKey: ['notice'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/notice');
            const data = await res.json();
            console.log(data);
            return data;
            
        }
    });
    return (
        <div>
            <h2>{notice.length}</h2>
        </div>
    );
};

export default NoticeShow;