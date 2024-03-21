import { Stack, ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const HeaderImg = () => {
  return (
    <Stack spacing={40}>
        <ImageList sx={{width: 3500, height: 450}} cols={3} rowHeight={164}>
            {
                itemData.map(item =>(
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=1000&h=164&fit=crop&auto=format&dpr=2`} loading='lazy' alt='Ayurveda' />
                    </ImageListItem>
                ))
            }
        </ImageList>
    </Stack>
  )
}

export default HeaderImg

const itemData = [
    {
        img: 'https://as2.ftcdn.net/v2/jpg/04/87/50/95/1000_F_487509563_gs6eGgOnIFVoHT0Nk6xzIHW2970EPdyL.jpg',
        title: "Ayurveda"
    }
]