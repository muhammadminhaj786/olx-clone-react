import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import {  UilHeart, UilArrowLeft } from '@iconscout/react-unicons'
import { Box, Typography } from '@mui/material';
import Logo from '../../assets/OLX-Symbol.png'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomTableRow from '../../Component/CustomTableRow';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Mobiles', 159, 6.0, 24, 4.0),
    createData('Vehicles', 237, 9.0, 37, 4.3),
    createData('Property for Sale', 262, 16.0, 24, 6.0),
    createData('Property for Rent', 305, 3.7, 67, 4.3),
    createData('Electronics & Home Appliances', 356, 16.0, 49, 3.9),
    createData('Bikes', 356, 16.0, 49, 3.9),
    createData('Business, Industrial & Agriculture', 356, 16.0, 49, 3.9),
    createData('Services', 356, 16.0, 49, 3.9),
    createData('Jobs', 356, 16.0, 49, 3.9),
    createData('Animals', 356, 16.0, 49, 3.9),
    createData('Furniture & Home Decor', 356, 16.0, 49, 3.9),
    createData('Fashion & Beauty', 356, 16.0, 49, 3.9),
    createData('Books, Sports & Hobbies', 356, 16.0, 49, 3.9),
    createData('Kids', 356, 16.0, 49, 3.9),


    


  ];
const PrePost = () => {
  return (
    <div className=''>
        <div className='h-[70px] border flex bg-slate-100 '>
        <div className='mt-3  ml-2'><Unicons.UilArrowLeft color={'black'} size='40px' /></div>
        <div className='h-[45px] w-[45px] mt-[19px] ml-[13px]'><img src={Logo} alt="" /></div>
        </div>
        <Typography sx={{textAlign: 'center', mt:2}}>POST YOUR AD</Typography>
        <div>
        <TableContainer sx={{width: '80%', margin: '15px auto'}} component={Paper}>
      <Table  aria-label="simple table">
        <TableHead className='bg-slate-100'>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}}>Choose a category</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, ind) => (
             <CustomTableRow key={ind} name={row.name}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </div>
  )
}

export default PrePost