import React from 'react'
import { ImageList, ImageListItem } from '@mui/material'

function srcset (image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`
  }
}

const ImageGallery = ({ images }) => {
  return (
    <ImageList
      sx={{ width: '100%', height: 500 }}
      cols={4}
      rowHeight={200}
    >
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            {...srcset(image, 121, image.rows, image.cols)}
            alt="Note image"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default ImageGallery
