import { TableCell, TableRow } from '@mui/material'
import React from 'react'

const CustomTableRow = ({name}) => {
  return (
    <TableRow
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell component="th" scope="row">
      {name}
    </TableCell>
  </TableRow>
  )
}

export default CustomTableRow