import React from 'react'
// import Image from 'next/image'
import { Paper, Divider, Box, Button, Grid } from '@material-ui/core';
import style from '../../styles/offers.module.css'

const Choice = () => {



    return (
        <div className='choiceBackground'>

            <Grid container spacing={1} >


                <Grid item lg={6}>
                    <div className='offerImage'>
                        <img width='100%' height='100%' src="/images/pic1.jpg" alt="offerImage" />
                    </div>
                </Grid>
                <Grid item lg={6}>
                    <div className='offerDetails'>
                        <Paper className="paper">
                            <Box mb={5}  className='summary'>
                                <img width='100%' src="https://www.directv.com/idpassets/sales/directv/upper_funnel/satellite/satellite_package_cards/SATELLITE_CHOICE_Header.svg" />
                                <Box pl={3} borderColor='warning.main' borderLeft={5}>
                                    <h3>Entertainment you crave, plus can’t-miss sports</h3>
                                    <ul>
                                        <li>90+ live channels and local TV stations</li>
                                        <li>45,000 on-demand titles</li>
                                        <li>Includes Regional Sports Networks</li>
                                        <li>You can get HBO Max™, SHOWTIME®, STARZ®, EPIX® and Cinemax® for the first 3 months on us. Read on for more</li>
                                    </ul>
                                    <p>Plus taxes. New price of $89.99/mo. starting on 1/23/22.</p>
                                </Box>
                            </Box>

                            <Divider />

                            <Box my={5} border={1} className="device">
                                <h3>Devices</h3>
                                <h3>Devices</h3>
                                <h3>Devices</h3>
                            </Box>
                            <button >Checkout</button>

                        </Paper>

                    </div>
                </Grid>
            </Grid>


        </div>
    )
}

export default Choice
