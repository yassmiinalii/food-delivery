import React from 'react';
import { Typography, Box,Stack} from "@mui/material";
import { Link } from "react-router-dom";



const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Orders",
    path: "/",
  },
  {
    name: "Location",
    path: "/",
  },
];

const style = {
    textDecoration: 'none',
      color: 'white'
  }

const Footer = () => {
    return (
        <Box sx={{ bgcolor:'#000000' , position: 'sticky', bottom: "0", width: '100vw '}}  > 
        <Stack sx={{  color: 'white' ,display: 'flex', padding:2 , justifyContent: 'center', gap: 4 , flexDirection: 'row'}}>
        {pages.map((page)=>(
            <Link style={style} to={page.path} key={page.name}>
            <Typography  textAlign='center' >{page.name}</Typography>
            </Link>
          ))}  
        </Stack>            
        </Box>
    );
};

export default Footer;

