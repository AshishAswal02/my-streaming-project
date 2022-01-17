import { Typography, Grid, Divider, Popper, Box } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Minicart = ({ cookieData, anchorElMinicart, handleClickOnMinicart }) => {

    const { starz, cinemax, current_offer, current_offer_price} = cookieData;
    const [total, setTotal] = useState(NaN);

    // useEffect(() => {
    //     console.log(current_offer + " ara?");
    //     console.log(current_offer_price + " or ye?");
    // }, [])

    useEffect(() => {

        const sum = 0.00;
        if (current_offer_price !== undefined) sum += parseFloat(current_offer_price.slice(1,6));
        if (starz !== undefined) sum += parseFloat(starz.slice(1, 6)); 
        if (cinemax !== undefined) sum += parseFloat(cinemax.slice(1, 6));
        setTotal(sum.toFixed(2));
    }, [starz, cinemax, current_offer]);

    return (
        <div>
            <Typography onClick={handleClickOnMinicart}>
                Cart
            </Typography>
            <Popper onClick={handleClickOnMinicart} open={Boolean(anchorElMinicart)} anchorEl={anchorElMinicart}>
                <Box borderRadius='borderRadius' borderColor={'#313131b8'} bgcolor={'background.paper'}
                    border={1} p={3} sx={{ width: '50vh' }}
                >

                    <Grid container
                        justifyContent='space-between'
                    >
                        <Grid item>
                            <Grid container direction='column' justifyContent='flex-start'>
                                <Grid item>
                                    <h4>{current_offer}</h4>
                                </Grid>
                                <Grid item>
                                    <p>20 hours Cloud DVR</p>
                                </Grid>
                                {starz && <Grid item>
                                    <p>starz&reg;</p>
                                </Grid>}

                                {cinemax && <Grid item>
                                    <p>cinemax&reg;</p>
                                </Grid>}
                                <Box mt={2} mb={2}>
                                        <Divider />
                                    </Box>
                                <Grid item>
                                    <h4>subtotal</h4>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container direction='column' justifyContent='flex-end'>
                                <Grid item>
                                    <p>{current_offer_price}</p >
                                </Grid>
                                <Grid item>
                                    <p>included</p>
                                </Grid>
                                <Grid item>
                                    <p>{starz}</p>
                                </Grid>
                                <Grid item>
                                    <p>{cinemax}</p>
                                </Grid>
                                <Grid item>
                                    <Box mt={2} mb={2}>
                                        <Divider />
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <h4>${total}/mo.</h4>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
            </Popper>
        </div>
    )
}

export default Minicart
