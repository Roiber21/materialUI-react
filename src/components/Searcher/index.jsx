import React, { useState } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Searcher = (props) =>{
    const { setInputUser } = props;
    
    const [valueInput, setValueInput]= useState('');
    const onSearchValueChange = (event)=>{
        const inputValue =event.target.value
        setValueInput(inputValue);
    }



    const handleSubmit= () =>{
        setInputUser(valueInput);
    }
    
    const handleEnter = (e) => {
        if (e.charCode == 13) {
            handleSubmit()
        }
    }

    
   
    return (
        <Stack
        direction='row'
        sx={{
            marginTop:'30px',
            width:'80%'
        }}>
        <TextField
        id="outlined-basic" 
        placeholder='Octocat'
        label="Github User" 
        variant="outlined"
        size='small'
        value={valueInput}
        onKeyPress={(event) => handleEnter(event)} 
    
        onChange={onSearchValueChange}
        sx={{
            width:'90%',
        }}
        />
       <IconButton 
       onClick={handleSubmit}
       size='small'
       sx={{
        left: '-45px'
       }}>
        <SearchIcon/>
       </IconButton>
    </Stack> 
    )
   
}

export default Searcher;
