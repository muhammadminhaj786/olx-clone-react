import { Box, TableCell, TableRow, Typography } from '@mui/material'
import React from 'react'
import * as Unicons from "@iconscout/react-unicons";
import { UilHeart, UilArrowLeft,UilAngleRightB } from "@iconscout/react-unicons";

const CustomTableRow = ({name, logos}) => {
  return (
    <TableRow
    sx={{ '&:last-child td, &:last-child th': { border: 0 },
    '&:hover': { backgroundColor: 'rgb(241 245 249)' } 
  }}
  >
    <TableCell  component="th" scope="row">
      <Box className="flex justify-between">
      <Box className="flex items-center"><img src={logos} alt="" />
        <Typography sx={{ml:'12px'}}>{name}</Typography>
      </Box>
      <Unicons.UilAngleRightB color={"black"} size="30px" />
      </Box>
    </TableCell>
  </TableRow>
  )
}

export default CustomTableRow