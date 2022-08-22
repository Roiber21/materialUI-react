import React, { useState , useEffect } from "react";
import { Container } from "@mui/material"
import Searcher from "./components/Searcher";
import { getGithubUser } from "./services/user"

const App = () => {
  const[inputUser, setInputUser]= useState('octocat');
  const [userStater,UserState]= useState('inputUser');

  const gettinUsers= async (user)=>{
    const userResponse = await getGithubUser(user)
    console.log(userResponse)
  }

    useEffect(()=>{
      gettinUsers(inputUser)
    },[]
    )
   
  return(
    <Container sx={{
      background:'whitesmoke',
      width: '80vw',
      height:'500px',
      borderRadius:'16px',
      marginTop:'40px',
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}> 
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
    
    
  )
};

export default App;