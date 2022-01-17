import { Typography, Grid, Divider, Popper, Popover, Box } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';


const Minicart = ({ cookieData, anchorElMinicart, handleClickOnMinicart }) => {

    const { starz, cinemax, current_offer, current_offer_price } = cookieData;
    const [total, setTotal] = useState(() => {
        return current_offer_price ? current_offer_price : 0.00;

    });
    const [cookies, setCookie] = useCookies();


    // useEffect(() => {
    //     console.log(current_offer + " ara?");
    //     console.log(current_offer_price + " or ye?");
    // }, [])

    useEffect(() => {

        const sum = 0.00;
        if (current_offer_price !== undefined) sum += parseFloat(current_offer_price.slice(1, 6));
        if (starz !== undefined) sum += parseFloat(starz.slice(1, 6));
        if (cinemax !== undefined) sum += parseFloat(cinemax.slice(1, 6));
        setTotal(sum.toFixed(2));
        setCookie('bill', total, { path: '/' })
    }, [starz, cinemax, current_offer]);

    useEffect(() => {
        return () => {
            setCookie('bill', total, { path: '/' })
        }
    }, []);

    return (
        <div>
            <Typography onClick={handleClickOnMinicart}>
                Cart
            </Typography>
            <Popover 
            onClick={handleClickOnMinicart} 
            open={Boolean(anchorElMinicart)} 
            anchorEl={anchorElMinicart}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }} 
            >
                <Box borderRadius='borderRadius' borderColor={'#313131b8'} bgcolor={'background.paper'}
                    border={1} p={3} sx={{ width: '50vh' }}
                >

                    {current_offer ?
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
                        : <Box display="flex" justifyContent="center">
                            <Box>
                                <p>Cart is empty</p>
                                <p>Shop now!! 😊</p>
                            </Box>
                        </Box>
                    }

                </Box>
            </Popover>
        </div>
    )
}

export default Minicart
