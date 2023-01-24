// import { Typography } from '@mui/material'
import React from 'react'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import JournalLayout from '../layout/JournalLayout'
import NothingSelectedView from '../views/NothingSelectedView'
// import NoteView from '../views/NoteView'

const JournalPage = () => {
  return (
    <>
      <JournalLayout>
        {/* <Typography>Eu proident culpa ullamco do enim consequat quis laboris culpa veniam. Sit eu enim aute culpa ut ipsum reprehenderit reprehenderit. Cillum occaecat officia esse sit ut ullamco. Fugiat pariatur laboris velit adipisicing irure nulla culpa. Dolore esse Lorem exercitation Lorem proident dolor voluptate ea ullamco sit sint id nisi. Deserunt elit elit aliquip commodo amet ipsum nostrud voluptate duis cupidatat. Dolor velit deserunt anim esse aliqua ut ut nisi irure proident reprehenderit consequat cillum.</Typography> */}
        <NothingSelectedView />
        {/* <NoteView /> */}

        <IconButton
          size="large"
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }}/>
        </IconButton>
      </JournalLayout>
    </>
  )
}

export default JournalPage
