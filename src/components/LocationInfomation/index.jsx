import { Grid, Stack, Typography } from '@mui/material';
import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

const LocationInformation = (props) => {
    const {userState}= props
    const {location, twitter_username, blog,company}= userState;
  return (
        <Grid container
        spacing={2} 
        sx={{
            marginTop:'15px'
        }}
        >
            <Grid item xs={12} lg={6}>
                <Stack 
                spacing={2}
                direction='row'
                >
                <LocationOnIcon/>
                {location != null
               ?  <Typography>{location}</Typography>
               :  <Typography>Not available</Typography>
               }
                </Stack>

            </Grid>
            <Grid item xs={12} lg={6}>
                <Stack 
                spacing={2}
                direction='row'
                >
                <TwitterIcon/>
               {twitter_username != null
               ?  <a target='_blank' href={`https://twitter.com/${twitter_username}`} rel="noreferrer"> <Typography>@{twitter_username}</Typography></a> 
               :  <Typography >Not available</Typography>
               }
                </Stack>

            </Grid>
            <Grid item xs={12} lg={6}>
                <Stack
                spacing={2}
                direction='row'
                >
                <LanguageIcon/>
                {blog != ''
               ?  <a target='_blank' href={blog} rel="noreferrer"><Typography>{blog}</Typography></a>
               :  <Typography>Not available</Typography>
               }
                </Stack>

            </Grid>
            <Grid item xs={12} lg={6}>
                <Stack
                spacing={2}
                direction='row'
                >
                <BusinessIcon/>
                {company != null
               ?  <Typography>{company}</Typography>
               :  <Typography>Not available</Typography>
               }
                </Stack>

            </Grid>
           


        </Grid>
    
  )
}

export default LocationInformation