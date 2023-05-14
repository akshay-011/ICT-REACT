import { Skeleton } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const LoadingBody = () => {
  return (
    <div>
        <Stack spacing={1} >
            <Skeleton variant='rounded' animation='wave' width={600} height={45} ></Skeleton>
            <Skeleton variant='rounded' animation='wave' width={600} height={45} ></Skeleton>
            <Skeleton variant='rounded' animation='wave' width={600} height={45} ></Skeleton>
            <Skeleton variant='rounded' animation='wave' width={600} height={45} ></Skeleton>
            <Skeleton variant='rounded' animation='wave' width={600} height={45} ></Skeleton>
            <Skeleton variant='rounded' animation='wave' width={600} height={45} ></Skeleton>
            <Skeleton variant='rounded' animation='wave' width={600} height={45} ></Skeleton>
            <Skeleton variant='rounded' animation='wave' width={600} height={45} ></Skeleton>
            <Skeleton variant='rounded' animation='wave' width={600} height={45} ></Skeleton>
        </Stack>
    </div>
  )
}

export default LoadingBody