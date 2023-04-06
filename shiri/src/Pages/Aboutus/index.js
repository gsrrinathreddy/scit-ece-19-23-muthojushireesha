import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Aboutus(){
const [loader,setLoader] = useState(true);
    const [aboutus,setAboutus] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Hobbies')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutus(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])


    return(
        <>
<Typography>Name: SHIREESHA MUTHOJU</Typography>
<Typography>Father Name: NAGENDRA CHARY MUTHOJU</Typography>
<Typography>Mother Name: SHOBHARANI MUTHOJU</Typography>
<Typography>Email: muthojushireesha4@@gmail.com</Typography>
<Typography>Phone No.: 9177966142</Typography>
        </>
        
    )
        }
