import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


const Signup = () => {

    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setValues] = useState(initialValues);
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues({ ...formValues, [id]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);


        fetch('/api/userInfo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
        })
            .then(res => res.json())
            .then(data => {
                console.dir(data);
                
                setTimeout(() => {
                    setIsPending(false);
                    router.push('./Login');
                    toast.success('Signup successful');
                }, 3000);
                

            })
            .catch(error => {
                toast.error('Some error occured');
                console.dir(error);
            })


    }

    return (
        <div>
            <section className='section'>
                <h1>SignUp page</h1>
                {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                <form className='form' onSubmit={handleSubmit}>
                    <div>
                        <input type='text' id='username' placeholder='name *'
                            value={formValues.username} onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input type='text' id='email' placeholder='email *'
                            value={formValues.email} onChange={handleChange}
                        />

                        {/* <p className="error-text">{formErrors.email}</p> */}
                    </div>
                    <div>
                        <input type='password' id='password' placeholder='password *'
                            values={formValues.password} onChange={handleChange}
                        />
                        {/*                         
                        <p className="error-text">{formErrors.password}</p> */}

                    </div>
                    {!isPending && <button type='submit'>Add</button>}
                    {isPending && <button disabled type='submit'>Adding</button>}
                </form>

            </section>
            <button style={{ "margin-left": "90%", "margin-top": "3rem" }} className='back-btn' onClick={() => router.back()}>Back</button>
        </div>
    )
}

export default Signup
