import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { firebaseDB } from '../../firebase/config'
import { fileUpload } from '../../helpers/fileUpload'
import { loadNotes } from '../../helpers/loadNotes'
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, setPhotosToActiveNote, updateNotes, deleteNote } from './journalSlice'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      imageUrls: [],
      date: new Date().getTime()
    }

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)
    newNote.id = newDoc.id

    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    if (!uid) {
      throw new Error('El uid del usuario no existe')
    }

    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const { active: note } = getState().journal

    const noteToFireStore = { ...note }
    delete noteToFireStore.id
    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`)
    await setDoc(docRef, noteToFireStore, { merge: true })
    dispatch(updateNotes(note))
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())

    const fileUploadPromises = []
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }
    const imagesUrls = await Promise.all(fileUploadPromises)
    dispatch(setPhotosToActiveNote(imagesUrls))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const { active: note } = getState().journal

    const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`)
    await deleteDoc(docRef)

    dispatch(deleteNote(note.id))
  }
}
