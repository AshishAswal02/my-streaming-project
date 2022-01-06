import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import Navbar from './src/Navbar'
import { useEffect } from 'react'




function MyApp({ Component, pageProps }) {

  useEffect(() => {
    sessionStorage.setItem('restrictAccess', 'on');
  }, [])

  return <>
    <Navbar />
    <ToastContainer />
    <Component {...pageProps} />
  </>
}

export default MyApp
