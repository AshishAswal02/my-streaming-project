import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Details = () => {
    const router = useRouter();

    useEffect(() => {
        const restrictAccess = sessionStorage.getItem('restrictAccess');
        if (restrictAccess === 'on') {      //if auth is false, redirect to Login
            toast.warn('please login first', {autoClose : 2000});
            router.push('../auth/Login');
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.setItem('restrictAccess', 'on');
        toast.success('Logged out', {autoClose : 2000});
        router.push('/');
    }
   
    
    return (
        <div>
            <section className="section">
                <h1>Deatils page</h1>
                <button onClick={() => router.back()}>Back</button>
                <button id='logout' onClick={handleLogout}>Logout</button>

            </section>
        </div>
    )
}

export default Details
