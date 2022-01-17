import { toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Grid, Paper, Box, Divider } from '@material-ui/core'
import Head from 'next/head'
import { route } from 'next/dist/server/router';
import { useCookies } from 'react-cookie';
// import path from "/images/pic1.jpg"


export async function getStaticPaths() {
    // const res = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/gear/api/packageInfo');
    const res = await fetch('http://localhost:3000/api/packageInfo');
    const packages = await res.json();
    const paths = packages.map(key => {
        return {
            params: { id: key.id }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    // const res = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/gear/api/packageInfo');
    const res = await fetch('http://localhost:3000/api/packageInfo');
    const packages = await res.json();

    const packageList = packages.filter(pack => pack.id.toString() === context.params.id)
    return {
        props: {
            data: packageList[0],
        }
    }
}


const Deatils = ({ data: offer }) => {

    const router = useRouter();
    const [starzToggle, setStarzToggle] = useState(false);
    const [cinemaxToggle, setCinemaxToggle] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();
    const { name, color, offerPrice, bgColor, bgImage, offerImage, data: { heading }, data: { details }, data: { moreInfo } } = offer;

    // useEffect(() => {
    //     const restrictAccess = sessionStorage.getItem('restrictAccess');
    //     if (restrictAccess === 'on') {      //if auth is false, redirect to Login
    //         // setTimeout(() => {toast.warn('please login first', {autoClose : 2000})}, 5000);
    //         router.push('../auth/Login');
    //     }
    //  }, []);
    
    useEffect(() => {
        setStarzToggle(false);
        setCinemaxToggle(false);
        setCookie('current_offer', name, { path: '/' })
        setCookie('current_offer_price', offerPrice, { path: '/' })
    }, [name]);
    
    useEffect(() => {
        starzToggle ?
            setCookie('starz', '$11.00/mo.', { path: '/' })
            : removeCookie('starz', { path: '/' });

        cinemaxToggle ?
            setCookie('cinemax', '$08.00/mo.', { path: '/' })
            : removeCookie('cinemax', { path: '/' })

    }, [starzToggle, cinemaxToggle]);



    return (
        <Box bgcolor={bgColor}>
            <Head>
                <title>{name}</title>
            </Head>
            <div>
                <div className='choiceBackground'>
                    <Grid container spacing={1} >
                        <Grid item lg={6}>
                            <div className='offerImage'>
                                <img width='100%' height='100%' src={bgImage} alt="offer BgImage" />
                            </div>
                        </Grid>
                        <Grid item lg={6}>
                            <div className='offerDetails'>
                                <Paper className="paper">

                                    <Box p={1} mb={5} className='summary'>
                                        <img width='100%' src={offerImage} alt='offer Image' />
                                        <Box pl={3} borderColor={color} borderLeft={8}>
                                            <h3 className='Styledh3'>{heading}</h3 >
                                            <ul>
                                                {details.map(p => <li key={p}>{p}</li>)}
                                            </ul>
                                            <p>{moreInfo}</p>
                                        </Box>
                                    </Box>

                                    <Grid item>
                                        <Divider />
                                    </Grid>

                                    <Box my={5} border={1}
                                        onClick={() => { setStarzToggle(!starzToggle) }}
                                        className={starzToggle ? 'selectedChannel' : 'unselectedChannel'}
                                        borderRadius={'borderRadius'}
                                        m={1}
                                        // border={1} 
                                        p={1}
                                    >
                                        <Grid
                                            container
                                            spacing={3}
                                            direction="column"
                                        >
                                            <Grid item >
                                                <Grid
                                                    container
                                                    alignItems='center'
                                                >
                                                    <Grid item md={4}>
                                                        <img height='100%' width='100%' src="https://telesputnik.ru/upload/iblock/f8d/14_telekanalov_starz_stali_dostupny_na_platforme_youtube_tv.png" alt="STARZ" />
                                                    </Grid>
                                                    <Grid item md={8}>
                                                        $11.00/mo.
                                                    </Grid>

                                                </Grid>

                                            </Grid>
                                            {
                                                starzToggle &&
                                                <div>
                                                    <Grid item >
                                                        <Divider variant="middle" />
                                                    </Grid>
                                                    <Grid item >
                                                        <Box my={1}>
                                                            <h4 className='Styledh4'>See what you get</h4>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item align='left'>
                                                        <Box ml={1} mb={2}>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto fugiat id? Ad consequatur adipisci possimus. Modi iure saepe ratione laboriosam rerum asperiores nesciunt sunt amet. Asperiores quis nesciunt possimus.</p>
                                                        </Box>
                                                    </Grid>

                                                </div>
                                            }
                                        </Grid>
                                    </Box>

                                    <Box my={5} border={1}
                                        onClick={() => { setCinemaxToggle(!cinemaxToggle) }}
                                        className={cinemaxToggle ? 'selectedChannel' : 'unselectedChannel'}
                                        borderRadius={'borderRadius'}
                                        m={1}
                                        // border={1} 
                                        p={3}
                                    >
                                        <Grid
                                            container
                                            spacing={3}
                                            direction="column"
                                        >
                                            <Grid item >
                                                <Grid
                                                    container
                                                    alignItems='center'
                                                >
                                                    <Grid item md={4}>
                                                        <img height='100%' width='100%' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Cinemax_2016.svg/1200px-Cinemax_2016.svg.png" alt="CINEMAX" />
                                                    </Grid>
                                                    <Grid item md={8}>
                                                        $08.00/mo.
                                                    </Grid>

                                                </Grid>

                                            </Grid>
                                            {
                                                cinemaxToggle &&
                                                <div>
                                                    <Grid item >
                                                        <Divider variant="middle" />
                                                    </Grid>
                                                    <Grid item >
                                                        <Box my={1}>
                                                            <h4 className='Styledh4'>See what you get</h4>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item align='left'>
                                                        <Box mb={1}>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque nesciunt explicabo nam enim optio fugit odio amet, nisi eum, tempora vel aut id. A!</p>
                                                        </Box>
                                                    </Grid>
                                                </div>
                                            }
                                        </Grid>
                                    </Box>
                                    {/* <h3 >Channels</h3 >
                                    <h3 >Devices</h3 > */}
                                    <button onClick={() => router.push('../Checkout')} >Checkout</button>

                                </Paper>

                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Box>
    )
}

export default Deatils
