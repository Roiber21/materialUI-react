import { Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import PaperInformation from '../../components/PaperInformation';

const Description = (props) => {
    const{ userState }= props;
    const {bio}= userState
  return (
    <Fragment>
     <Stack>
        {bio != null
        ? <Typography> {bio}</Typography>
        : <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et 
             dolore magna aliqua.
            </Typography>

        }
     
       </Stack>
       <PaperInformation userState={userState} />
       </Fragment>
  )
}

export default Description;