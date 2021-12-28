import { useRouter } from 'next/router';
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';


// export const getStaticProps = async () => {
    
//     const res  = await fetch();
//     const data = res.json();
    
//     return {
//         props : {data}
//     }
// }


const Login = () => {

    const initialValues = { email: "", password: "" };
    const [formValues, setValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [dataInDb, setDataInDb] = useState();
    const [showSignUp, setShowSignUp] = useState(false);
    const router = useRouter();
    



    const handleChange = (e) => {
        const { id, value } = e.target;
        setValues({ ...formValues, [id]: value });
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!values.email)
            errors.email = "username is required"
        else if (!regex.test(values.email))
            errors.email = "enter a valid email"

        if (!values.password)
            errors.password = "password is required"
        else if (values.password.length < 4 || values.password.length > 10)
            errors.password = "password should in range 4 to 10 letters"


        return errors;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        fetch('/api/userInfo')
            .then(res => res.json())
            .then(data => {
                setDataInDb(data);
            })
            .catch( error => {
                toast.error('Some error occured');
                console.dir(error);
            })
    }, []);


    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
           
            const user = dataInDb.find((data) => {
                return formValues.email === data.email && formValues.password === data.password;
            })

            if(user === undefined ){     //if we didnt find any user
                toast('New user?', {autoClose: 2500});
                setShowSignUp(true);
            }

            else if (formValues.email === user.email && formValues.password === user.password) {
                sessionStorage.setItem('restrictAccess', 'off');
                toast.success('Loging successful', { autoClose: 2000 });
                // sessionStorage.setItem('user': user.);
                router.push('../src/Details');
            }
            setIsSubmit(false);
            setFormErrors({});
        }
    }, [isSubmit]);

    return (
        <div>
            <style jsx>
                {`
           
                `}
            </style>
            <section className='section'>
                <h1>Login page</h1>
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                <form className='form' onSubmit={handleSubmit}>
                    <div>
                        <input type='text' id='email' placeholder='email *' value={formValues.email}
                            onChange={handleChange} />
                        <p className="error-text">{formErrors.email}</p>
                    </div>
                    <div>
                        <input type='password' id='password' placeholder='password *' values={formValues.password}
                            onChange={handleChange} />
                        <p className="error-text">{formErrors.password}</p>

                    </div>
                    <button type='submit'>Submit</button>
                    { showSignUp && <button onClick={() => {router.push('./Signup')} }>SignUp</button> }
                </form>

            </section>
            <button style={{ "margin-left": "90%", "margin-top": "3rem" }} className='back-btn' onClick={() => router.back()}>Back</button>
        </div>
    )
}

export default Login
