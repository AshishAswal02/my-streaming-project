import React from 'react'
import { Typography, Box } from '@material-ui/core';


const Checkout = () => {
    // console.log(document.cookie);
    // const billIndex = document.cookie.indexOf('bill');
    // const bill = document.cookie.slice(billIndex + 5, billIndex + 10);
    return (
        <div>
            <section className="section">
            <h1>Checkout page</h1>
            
            <Box m={4}>
                <h3>Thanks for shopping with us</h3>
                <br/>
                {/* <h4>Your total bill is </h4>
                    <h4>${bill}/mo.</h4> */}
            </Box>

            </section>
        </div>
    )
}

export default Checkout
