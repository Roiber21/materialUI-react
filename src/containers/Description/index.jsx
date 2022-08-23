import { Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react'

const Description = (props) => {
    const{ userState }= props;
    const {bio}= userState
  return (
     <Stack>
        {bio != null
        ? <Typography> {bio}</Typography>
        : <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et 
             dolore magna aliqua.
            </Typography>

        }
     
       </Stack>
  )
}

export default Description;