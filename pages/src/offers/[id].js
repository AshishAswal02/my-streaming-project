import { toast } from 'react-toastify';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid, Paper, Box, Divider } from '@material-ui/core'
import Head from 'next/head'
// import path from "/images/pic1.jpg"


export async function getStaticPaths() {
    const res = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/gear/api/packageInfo');
    const packages = await res.json();

    const paths = packages.map( key => {
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
    const res = await fetch('https://my-bassist-chris.mybassistchris.now.sh/api/gear/api/packageInfo');
    const packages = await res.json();

    const packageList = packages.filter( pack => pack.id.toString() === context.params.id)
    return {
        props: {
            data: packageList[0],
        }
    }
}


const Deatils = ({ data: offer }) => {

    const router = useRouter();
    const { name, color, bgColor , bgImage , offerImage, data: { heading }, data: { details }, data: { moreInfo } } = offer;
    
    // useEffect(() => {
    //     const restrictAccess = sessionStorage.getItem('restrictAccess');
    //     if (restrictAccess === 'on') {      //if auth is false, redirect to Login
    //         // setTimeout(() => {toast.warn('please login first', {autoClose : 2000})}, 5000);
    //         router.push('../auth/Login');
    //     }
    // }, []);

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
                            <img width='100%' height='100%' src={bgImage} alt="offerBgImage" />
                        </div>
                    </Grid>

                    <Grid item lg={6}>
                        <div className='offerDetails'>
                            <Paper className="paper">
                                <Box mb={5} className='summary'>
                                    <img width='100%' src={offerImage} />
                                    <Box pl={3} borderColor={color} borderLeft={8}>
                                        <h3>{heading}</h3>
                                        <ul> 
                                            {details.map(p => <li key={p}>{p}</li>)}
                                        </ul>
                                        <p>{moreInfo}</p>
                                    </Box>
                                </Box>

                                <Divider />

                                <Box my={5} border={1} className="device">
                                    <h3>Channels</h3>
                                    <h3>Channels</h3>
                                    <h3>Devices</h3>
                                </Box>
                                <button >Checkout</button>

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
