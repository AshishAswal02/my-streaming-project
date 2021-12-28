import React from 'react'
// import Index_rough from './Index_rough'
// import Link from 'next/link'
import Head from 'next/head'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Button from '@material-ui/core/Button'
// import { Button } from '@mui/material';


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

      <main>
        <section className="section">
        {/* <Button variant="outlined" color="error">
          ok</Button> */
          // console.log(data + 'is the data')
          }
        

        <h1>This is my home page</h1>
        <button onClick={() => { toast.success('toast') }}>toast</button>
        </section>
      </main>
      <footer style={{ position: 'fixed' }}>
        <p>Copyright &copy; {new Date().getFullYear()},
          my coding journey
        </p>
      </footer>

    </>
  )
}

export default index



