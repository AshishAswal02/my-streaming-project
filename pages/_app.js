import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'
import Navbar from './src/Navbar'
import { createContext, useEffect } from 'react'
import { CookiesProvider } from "react-cookie";


const con1 = createContext();


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    sessionStorage.setItem('restrictAccess', 'on');
  }, [])

  return <>
    {/* <con1.Provider value={' ok accessible '}> */}

    <CookiesProvider>
      <Navbar />
      <ToastContainer />
      <Component {...pageProps} />
    </CookiesProvider>
    
    {/* </con1.Provider> */}
  </>
}

export default MyApp
export {con1}
