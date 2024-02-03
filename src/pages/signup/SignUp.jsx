import { TextField } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <>
    <div>
    <TextField sx={{width:"100%" ,marginTop:"10px"}}
          name='title'
          label="title"
          type="title"
        />  
         <TextField sx={{width:"100%" ,marginTop:"10px"}}
          name='price'
          label="price"
          type="price"
        /> 
         <TextField sx={{width:"100%" ,marginTop:"10px"}}
          name='address'
          label="address"
          type="address"
        /> 
    </div></>
  )
}

export default SignUp