import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const PaperInformation = (props) => {
    const { userState }= props
    const{public_repos, followers,following}= userState


  return (
    <Paper  sx={{
        background:'#b3d9e4b3',
    }} elevation={3} >
        <Stack spacing={3}
        direction='row'
        sx={{
            justifyContent:'space-evenly',
            margin:'20px',
        }}
        >
            <Stack>  
                <Typography variant='h6'>Repos</Typography>
                <Typography align="center" variant='h4'>{public_repos} </Typography>
             </Stack>
            <Stack> 
                 <Typography variant='h6'>follower</Typography> 
                 <Typography align="center" variant='h4'>{followers} </Typography> 
                </Stack>
            <Stack>  
                <Typography variant='h6'>following</Typography> 
                <Typography align="center" variant='h4'>{following} </Typography> 
            </Stack>
           
        </Stack>
    </Paper>
    
  )
}

export default PaperInformation