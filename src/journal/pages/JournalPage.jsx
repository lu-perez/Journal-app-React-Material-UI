// import { Typography } from '@mui/material'
import React from 'react'
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import JournalLayout from '../layout/JournalLayout'
import NothingSelectedView from '../views/NothingSelectedView'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'
import NoteView from '../views/NoteView'
// import NoteView from '../views/NoteView'

const JournalPage = () => {
  const dispatch = useDispatch()
  const { isSaving, active } = useSelector(state => state.journal)

  const onClickNewNote = () => {
    dispatch(startNewNote())
  }

  return (
    <>
      <JournalLayout>
        {/* <Typography>Eu proident culpa ullamco do enim consequat quis laboris culpa veniam. Sit eu enim aute culpa ut ipsum reprehenderit reprehenderit. Cillum occaecat officia esse sit ut ullamco. Fugiat pariatur laboris velit adipisicing irure nulla culpa. Dolore esse Lorem exercitation Lorem proident dolor voluptate ea ullamco sit sint id nisi. Deserunt elit elit aliquip commodo amet ipsum nostrud voluptate duis cupidatat. Dolor velit deserunt anim esse aliqua ut ut nisi irure proident reprehenderit consequat cillum.</Typography> */}
        {
          (active)
            ? <NoteView />
            : <NothingSelectedView />
        }

        <IconButton
          onClick={onClickNewNote}
          size="large"
          disabled={isSaving}
          sx={{
            color: 'white',
            backgroundColor: 'secondary.main',
            ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
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
