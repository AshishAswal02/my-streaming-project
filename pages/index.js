import React, { useEffect } from 'react'
// import Index_rough from './Index_rough'
// import Link from 'next/link'
import Head from 'next/head'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Navbar from './src/Navbar';
// import Button from '@material-ui/core/Button'
// import { Button } from '@mui/material';


//export async function getStaticProps() {
 //const res = await fetch('http://localhost:3000/api/packageInfo');
  //const dbData = await res.json();

  //return {
      //props: {
          //dbData,
          //ss: 1
      //}
  //}
//}

const index = () => {



  return (
    <>

      <Head>
        <title>
          Homework
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      </Head>
      {/* <Navbar ss={ss} dbData= {dbData} /> */}
      <main>
        <img width='100%' width='100%' src="https://9to5mac.com/wp-content/uploads/sites/6/2021/12/screenshot-2021-12-10-at-08.35.40@2x.jpg?quality=82&strip=all" />





        {/* <section className="section"> */}
        {/* <Button variant="outlined" color="error">
          ok</Button> */
          // console.log(data + 'is the data')
          }
        

        {/* <h1>This is my home page</h1>
        <button onClick={() => { toast.success('toast') }}>toast</button>
        </section> */}
      </main>
      {/* <footer style={{ position: 'fixed' }}>
        <p>Copyright &copy; {new Date().getFullYear()},
          my coding journey
        </p>
      </footer> */}

    </>
  )
}

export default index



