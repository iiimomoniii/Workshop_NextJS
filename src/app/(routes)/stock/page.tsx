import { Box } from '@mui/material'
import React from 'react'

type Props = {}

export default function Stock({}: Props) {
  return (
    // <div style={{ marginTop: 8 }}>Stock</div> margin sx 1 : style 8
    <Box sx={{ mt:1 }}> Stock</Box>
  )
}