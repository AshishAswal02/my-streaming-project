import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Grid, Paper, Box, Divider } from '@material-ui/core'
import Head from 'next/head'

// export const getStaticPaths = async () =>{
//     const res = await fetch(c)
// }
const Deatils = () => {

    const [offer, setOffer] = useState();
    const router = useRouter();
    const idFromUrl = router.query.packageId;
    useEffect(() => {
        fetch('/api/packageInfo')
            .then(res => res.json())
            .then(dataInDb => {
                setOffer(dataInDb.find(data => {
                    return idFromUrl === data.id;
                }
                ))
            })
    }, [idFromUrl]);


    console.log(offer);
    const {name, image, data: {heading}, data: {details}, data: {moreInfo} } = offer;

    return (
        <div>
            <Head>
                <title>{name}</title>
            </Head>
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
                                <Box mb={5} className='summary'>
                                    <img width='100%' src= {image} />
                                    <Box pl={3} borderColor='warning.main' borderLeft={5}>
                                        <h3>{heading}</h3>
                                        <ul>
                                        {details.map(p => <li>{p}</li>)}
                                        </ul>
                                        <p>{moreInfo}</p>
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
        </div>
    )
}

export default Deatils
