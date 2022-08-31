import { Stack, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import LocationInformation from '../../components/LocationInfomation';
import PaperInformation from '../../components/PaperInformation';

const Description = (props) => {
    const{ userState }= props;
    const {bio}= userState
  return (
    <Fragment>
     <Stack sx={{
      justifyContent:'center'
     }}>
        {bio != null
        ? <Typography variant='body1'> {bio}</Typography>
        : <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Typography>

        }
     
       </Stack>
       <PaperInformation userState={userState} />
       <LocationInformation userState={userState} />
       </Fragment>
  )
}

export default Description;