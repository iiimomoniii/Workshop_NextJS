import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image';
type Props = {}

export default function Stock({}: Props) {
  return (
    // <div style={{ marginTop: 8 }}>Stock</div> margin sx 1 : style 8
    // <Box sx={{ mt:1 }}> Stock</Box>
    <Box sx={{ mt:1 }}>
      Stock
      <Image src="/static/img/next_register.jpg" width={180} height={35} alt="logo" />
    </Box>
  )
}