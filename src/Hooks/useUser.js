import React, { useEffect, useState } from 'react';

const useUser = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://randomuser.me/api/?results=15')
        .then(res=>res.json())
        .then(data=>setUsers(data.results))
        .finally(()=>setIsLoading(false))
    },[])
    return [
        users,
        isLoading
    ]
};

export default useUser;