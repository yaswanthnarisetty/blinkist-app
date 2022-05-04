import React from "react";
import ImageFileLogo from "./../../../stories/assets/Blinkist.png";
import { makeStyles } from "@mui/styles";


const useStyles=makeStyles({

    mlogo:{

        height: '26px',
        width: '124.09px',
        left: '0px',
        top: '0px',
        borderRadius: '0px'
        
    }
});
interface Props{
    
}
export const Logo = (_props:Props) => {

    const classes=useStyles();

    return(

        <div >
        <img className={classes.mlogo} src={ImageFileLogo} alt='BlinkList' />
        </div>
    );
}

/*
import React from 'react'
import styled from 'styled-components'

interface Props {
    alt: string
    src: string
}

const Image = styled.img`
    height: 24px;
    width: 99.09677124023438px;
    border-radius: 20px;
    object-fit: cover;
    left: 0;
    top: 0;
`

const logoImage = ({ alt, src}: Props) => {
    return <Image src={src} alt={alt}/>
}

export default logoImage
*/