import React, { useState , useEffect } from "react";
import { Container } from "@mui/material"
import Searcher from "./components/Searcher";
import { getGithubUser } from "./services/user"
import UserCard from "./containers/userscards";

const App = () => {
  const[inputUser, setInputUser]= useState('octocat');
  const [userState,setUserState]= useState('inputUser');
  const [notFound, setNotFound]= useState(false)
  const gettinUsers= async (user)=>{
    const userResponse = await getGithubUser(user)
    if(userState === 'octocat'){
      localStorage.setItem('octocat', userResponse)
    }
    if(userResponse.message === 'Not Found'){
      const { octocat }= localStorage;
      setInputUser(octocat)
      setNotFound(true)

    } else{
      setUserState(userResponse)
    }
    console.log(userState)

  }

    useEffect(()=>{
      gettinUsers(inputUser)
    },[inputUser]
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
      <UserCard userState={userState} />
    </Container>
    
    
  )
};

export default App;