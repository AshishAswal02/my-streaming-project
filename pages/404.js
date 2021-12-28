import {useRouter} from 'next/router'
import { useEffect } from 'react';

const Error = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 5000);
    }, []);

    return (
        <div className="cen">
            <h1>Error page</h1>
        </div>
    )
}

export default Error
