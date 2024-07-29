



import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const Signup=()=>{
  const navigate=useNavigate();
  const routeChange=()=>{
    let path='/';
    navigate(path);
  }
  const[username,setusername]=useState('')
 const[email,setemail]=useState('');
 const[password,setpassword]=useState('');
  const handleuserchange=(e)=>{
  setusername(e?.target?.value)
  }
  const handleclear=()=>{
    setusername('');
    setemail('');
    setpassword('');
  }
  const adduser=async()=>{
    try{
      const userdata={
         name: username,
         password:password,
        email: email
      }
         const createDetailsstring = JSON.stringify(userdata);
          const requestBody = {
        Json: createDetailsstring,
      };
        const { data: response } = await axios.post(
        `http://localhost:4000/add-user`,
        userdata,
          {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      if(response==='User added successfully'){
        // alert('User added successfully');
        toast.success('User added successfully')
        handleclear();
        routeChange();
      }
    } catch (error){
    // alert(`Error: ${error.response ? error.response.data : error.message}`);
    toast.error(`Error: ${error.response ? error.response.data : error.message}`)
    }
  }
    return(
 <div style={{alignItems:'center',display:'flex',flexDirection:'column'}}>
  <h1>Register</h1>
  <div>
     <div style={{display:'flex',alignItems: 'flex-end'}}>
       <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField 
        id="input-with-sx"  
        variant="standard" 
        placeholder="Username"
        onChange={
        handleuserchange
        }
        value={username}
        />
     </div>
      <div style={{display:'flex',alignItems: 'flex-end'}}>
       <MailOutlineRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5,mt:2 }} />
        <TextField 
        id="input-with-sx"  
        variant="standard" 
        placeholder="Email"
        onChange={(e)=>{
          setemail(e?.target?.value);
        }}
        value={email}
        />
     </div>
         <div style={{display:'flex',alignItems: 'flex-end'}}>
       <LockResetRoundedIcon sx={{ color: 'action.active', mr: 1, my: 0.5,mt:2 }} />
        <TextField 
        id="input-with-sx"  
        variant="standard" 
        placeholder="Password"
        type="password"
        onChange={(e)=>{
          setpassword(e?.target?.value);
        }}
        value={password}
        />
     </div>
     <Button 
     variant="contained"
     sx={{mt:3,alignItems:'center',ml:6}}
     onClick={()=>{
      adduser();
  
     }}
     >
      Create User
      </Button>
  </div>
 </div>
    );
}
